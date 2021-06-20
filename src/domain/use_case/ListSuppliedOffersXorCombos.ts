import { IComboSuppliedOffersRepository } from "../../data/repository/ComboSuppliedOffersRepository";
import { ISuppliedOfferRepository } from "../../data/repository/SuppliedOfferRepository";
import { Id } from "../../data/util/types";
import { SuppliedOfferConvert } from "../../presentation/convert/SuppliedOfferConvert";
import { SuppliedOffersResponse } from "../../presentation/response/success";
import { PAGE_DEFAULT, PAGE_LIMIT_DEFAULT } from "../constant";
import { PaginationRequest } from "../util/pagination";
import { UseCase } from "./UseCase";

export interface Result<Result> {
	status: number;
	data: Result | any;
}

export interface RequestListSupXorComb extends PaginationRequest {
	id: Id;
}

export class ListSuppliedOffersXorCombos
	implements UseCase<RequestListSupXorComb, Result<SuppliedOffersResponse>>
{
	constructor(
		private suppliedOfferRepository: ISuppliedOfferRepository,
		private comboSuppliedOfferRepository: IComboSuppliedOffersRepository
	) {}

	async run({ id, pagination }: RequestListSupXorComb) {
		try {
			const { page = PAGE_DEFAULT, limit = PAGE_LIMIT_DEFAULT } = pagination;

			const [suppliedOffers, count] =
				await this.suppliedOfferRepository.findAndCount(id, { page, limit });

			const [comboSuppliedOfferRepository, countCombo] =
				await this.comboSuppliedOfferRepository.findAndCount(id, {
					page,
					limit,
				});

			const { toSuppliedOffersResponse } = SuppliedOfferConvert();

			const result = toSuppliedOffersResponse(
				[...comboSuppliedOfferRepository, ...suppliedOffers],
				countCombo + count
			);

			return { status: 200, data: result };
		} catch (error) {
			return { status: 500, data: error };
		}
	}
}
