import { IComboSuppliedOffersRepository } from "../../data/repository/ComboSuppliedOffersRepository";
import { ISuppliedOfferRepository } from "../../data/repository/SuppliedOfferRepository";
import { Id } from "../../data/util/types";
import { SuppliedOfferConvert } from "../../presentation/convert/SuppliedOfferConvert";
import {
	getError,
	getErrorFromMsg,
	getSuccess,
	Result,
} from "../../presentation/util/result";
import { IComboSuppliedOffers } from "../model/comboSuppliedOffers";
import { ISuppliedOffer } from "../model/suppliedOffer";
import { UseCase } from "./UseCase";

const NOT_FOUND = "Supplied Offer not found";
const BAD_REQUEST = `Bad request.\nDo you tried to specify type?`;

const types = ["offer", "combo"];

export interface RequestGetSup {
	id: Id;
	type: string;
}

/**
 * Get Offer or Combo
 */
export class GetSuppliedOffer implements UseCase<RequestGetSup> {
	constructor(
		private supOfferRepo: ISuppliedOfferRepository,
		private comboSupOfferRepo: IComboSuppliedOffersRepository
	) {}

	requestIsValid(req: RequestGetSup): boolean {
		return types.some((t) => t === req.type);
	}

	async run(req: RequestGetSup): Promise<Result> {
		try {
			const { id, type } = req;

			if (!this.requestIsValid(req)) {
				return getErrorFromMsg(400, BAD_REQUEST);
			}

			let data: ISuppliedOffer | IComboSuppliedOffers | undefined;

			switch (type) {
				case "offer":
					data = await this.supOfferRepo.findOne(id);
					break;
				case "combo":
					data = await this.comboSupOfferRepo.findOne(id);
					break;
			}

			const { toSuppliedOfferResponse } = SuppliedOfferConvert();

			if (data === undefined) return getErrorFromMsg(404, NOT_FOUND);

			const result = toSuppliedOfferResponse(data);

			return getSuccess(200, result);
		} catch (error) {
			return getError(500, error);
		}
	}
}
