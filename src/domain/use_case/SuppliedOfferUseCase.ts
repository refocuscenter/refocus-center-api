import { IComboSuppliedOffersRepository } from "../../data/repository/ComboSuppliedOffersRepository";
import { ISuppliedOfferRepository } from "../../data/repository/SuppliedOfferRepository";
import { Id } from "../../data/util/types";
import { PAGE_DEFAULT, PAGE_LIMIT_DEFAULT } from "../constant";
import { SuppliedOfferXorCombo } from "../model/suppliedOfferXorCombo";
import { PaginationRequest } from "../util/pagination";

export interface RequestListSup extends PaginationRequest {
	unitStoreId: Id;
}

export interface RequestGetSup {
	id: Id;
	type: string;
}

export interface ResponseListSup {
	offersAndCombos: SuppliedOfferXorCombo[];
	totalCount: number;
}

export function SuppliedOfferUseCase(
	supOfferRepo: ISuppliedOfferRepository,
	comboSupOfferRepo: IComboSuppliedOffersRepository
) {
	async function get(req: RequestGetSup) {
		const { id, type } = req;

		let supXorCombo: SuppliedOfferXorCombo | undefined;

		switch (type) {
			case "offer":
				supXorCombo = await supOfferRepo.findOne(id);
				break;
			case "combo":
				supXorCombo = await comboSupOfferRepo.findOne(id);
				break;
		}

		return supXorCombo;
	}

	async function list({ unitStoreId, pagination }: RequestListSup) {
		const { page = PAGE_DEFAULT, limit = PAGE_LIMIT_DEFAULT } = pagination;

		const [supOffers, countSup] = await supOfferRepo.findAndCount(unitStoreId, {
			page,
			limit,
		});

		const [comboSupOfferRepository, countCombo] =
			await comboSupOfferRepo.findAndCount(unitStoreId, {
				page,
				limit,
			});

		const offersAndCombos = [...comboSupOfferRepository, ...supOffers];
		const totalCount = countCombo + countSup;

		return { offersAndCombos, totalCount };
	}

	return {
		get,
		list,
	};
}
