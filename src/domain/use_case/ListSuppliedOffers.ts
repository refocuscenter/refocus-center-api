import { IComboSuppliedOffersRepository } from "../../data/repository/ComboSuppliedOffersRepository";
import { ISuppliedOfferRepository } from "../../data/repository/SuppliedOfferRepository";
import { Id } from "../../data/util/types";
import { PAGE_DEFAULT, PAGE_LIMIT_DEFAULT } from "../constant";
import { IComboSuppliedOffers } from "../model/comboSuppliedOffers";
import { ISuppliedOffer } from "../model/suppliedOffer";
import { PaginationRequest } from "../util/pagination";
import { UseCase } from "./UseCase";

export interface RequestListSup extends PaginationRequest {
	unitStoreId: Id;
}

export interface ResponseListSup {
	offersAndCombos: (ISuppliedOffer | IComboSuppliedOffers)[];
	totalCount: number;
}

/**
 * List Offers and Combos of Offers
 */
export class ListSuppliedOffers
	implements UseCase<RequestListSup, ResponseListSup>
{
	constructor(
		private supOfferRepo: ISuppliedOfferRepository,
		private comboSupOfferRepo: IComboSuppliedOffersRepository
	) {}

	async run({ unitStoreId: unitStoreId, pagination }: RequestListSup) {
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

		const offersAndCombos = [...comboSupOfferRepository, ...supOffers];
		const totalCount = countCombo + countSup;

		return { offersAndCombos, totalCount };
	}
}
