import { IComboSuppliedOffersRepository } from "../../data/repository/ComboSuppliedOffersRepository";
import { ISuppliedOfferRepository } from "../../data/repository/SuppliedOfferRepository";
import { Id } from "../../data/util/types";
import { SuppliedOfferConvert } from "../../presentation/convert/SuppliedOfferConvert";
import { getError, getSuccess } from "../../presentation/util/result";
import { PAGE_DEFAULT, PAGE_LIMIT_DEFAULT } from "../constant";
import { PaginationRequest } from "../util/pagination";
import { UseCase } from "./UseCase";

export interface RequestListSup extends PaginationRequest {
	unitStoreId: Id;
}

/**
 * List Offers and Combos of Offers
 */
export class ListSuppliedOffers implements UseCase<RequestListSup> {
	constructor(
		private supOfferRepo: ISuppliedOfferRepository,
		private comboSupOfferRepo: IComboSuppliedOffersRepository
	) {}

	async run({ unitStoreId: unitStoreId, pagination }: RequestListSup) {
		try {
			const { page = PAGE_DEFAULT, limit = PAGE_LIMIT_DEFAULT } = pagination;

			const [supOffers, countSup] = await this.supOfferRepo.findAndCount(
				unitStoreId,
				{
					page,
					limit,
				}
			);

			const [comboSupOfferRepository, countCombo] =
				await this.comboSupOfferRepo.findAndCount(unitStoreId, {
					page,
					limit,
				});

			const { toSuppliedOffersResponse } = SuppliedOfferConvert();

			const offersAndCombos = [...comboSupOfferRepository, ...supOffers];
			const totalCount = countCombo + countSup;

			const result = toSuppliedOffersResponse(offersAndCombos, totalCount);

			return getSuccess(200, result);
		} catch (error) {
			return getError(500, error);
		}
	}
}
