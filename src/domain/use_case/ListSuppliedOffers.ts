import { IComboSuppliedOffersRepository } from "../../data/repository/ComboSuppliedOffersRepository";
import { ISuppliedOfferRepository } from "../../data/repository/SuppliedOfferRepository";
import { Id } from "../../data/util/types";
import { SuppliedOfferConvert } from "../../presentation/convert/SuppliedOfferConvert";
import { SuppliedOffersResponse } from "../../presentation/response/success";
import { Result } from "../../presentation/util/result";
import { PAGE_DEFAULT, PAGE_LIMIT_DEFAULT } from "../constant";
import { PaginationRequest } from "../util/pagination";
import { UseCase } from "./UseCase";

export interface RequestListSup extends PaginationRequest {
	unitStoreid: Id;
}

/**
 * List Offers and Combos of Offers
 */
export class ListSuppliedOffers
	implements UseCase<RequestListSup, Result<SuppliedOffersResponse>>
{
	constructor(
		private supOfferRepo: ISuppliedOfferRepository,
		private comboSupOfferRepo: IComboSuppliedOffersRepository
	) {}

	async run({ unitStoreid, pagination }: RequestListSup) {
		try {
			const { page = PAGE_DEFAULT, limit = PAGE_LIMIT_DEFAULT } = pagination;

			const [supOffers, countSup] = await this.supOfferRepo.findAndCount(
				unitStoreid,
				{
					page,
					limit,
				}
			);

			const [comboSupOfferRepository, countCombo] =
				await this.comboSupOfferRepo.findAndCount(unitStoreid, {
					page,
					limit,
				});

			const { toSuppliedOffersResponse } = SuppliedOfferConvert();

			const offersAndCombos = [...comboSupOfferRepository, ...supOffers];
			const totalCount = countCombo + countSup;

			const result = toSuppliedOffersResponse(offersAndCombos, totalCount);

			return { status: 200, data: result };
		} catch (error) {
			return { status: 500, data: error };
		}
	}
}
