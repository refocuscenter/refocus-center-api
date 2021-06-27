import { IComboSuppliedOffersRepository } from "../../data/repository/ComboSuppliedOffersRepository";
import { ISuppliedOfferRepository } from "../../data/repository/SuppliedOfferRepository";
import { Id } from "../../data/util/types";
import { SuppliedOfferXorCombo } from "../model/suppliedOfferXorCombo";
import { UseCase } from "./UseCase";

export interface RequestGetSup {
	id: Id;
	type: string;
}

/**
 * Get Offer or Combo
 */
export class GetSuppliedOffer
	implements UseCase<RequestGetSup, SuppliedOfferXorCombo | undefined>
{
	constructor(
		private supOfferRepo: ISuppliedOfferRepository,
		private comboSupOfferRepo: IComboSuppliedOffersRepository
	) {}

	async run(req: RequestGetSup) {
		const { id, type } = req;

		let supXorCombo: SuppliedOfferXorCombo | undefined;

		switch (type) {
			case "offer":
				supXorCombo = await this.supOfferRepo.findOne(id);
				break;
			case "combo":
				supXorCombo = await this.comboSupOfferRepo.findOne(id);
				break;
		}

		return supXorCombo;
	}
}
