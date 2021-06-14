import { IComboSuppliedOffers } from "../../domain/model/comboSuppliedOffers";
import { ISuppliedOffer } from "../../domain/model/suppliedOffer";
import {
	isISuppliedOffer,
	SuppliedOfferXorCombo,
} from "../../domain/model/suppliedOfferXorCombo";
import * as PresentationModels from "../model";
import {
	SuppliedOfferResponse,
	SuppliedOffersResponse,
} from "../response/success";
import { toBase64Png } from "../util/convert";

export const SuppliedOfferConvert = function () {
	return { toSuppliedOffersResponse, toSuppliedOfferResponse };

	function toSuppliedOfferResponse(
		supOffer: SuppliedOfferXorCombo
	): SuppliedOfferResponse {
		return {
			suppliedOffer: toSuppliedOfferXorCombo(supOffer),
		};
	}

	function toSuppliedOffersResponse(
		supOffers: SuppliedOfferXorCombo[],
		count: number
	): SuppliedOffersResponse {
		return {
			suppliedOffers: supOffers.map((supOffer) => {
				return toSuppliedOfferXorCombo(supOffer);
			}),
			count: count,
		};
	}

	function toSuppliedOffer(
		suppliedOffer: ISuppliedOffer
	): PresentationModels.SuppliedOffer {
		const { stockAmount, value, offer } = suppliedOffer;
		const { name, description, presentationImage } = offer;

		return {
			value,
			stockAmount: stockAmount ? stockAmount : undefined,
			id: suppliedOffer.id,
			offer: {
				name,
				description,
				image: toBase64Png(presentationImage),
				id: offer.id,
			},
		};
	}

	function toCombo(
		combo: IComboSuppliedOffers
	): PresentationModels.ComboSuppliedOffer {
		const { id, value, name, suppliedOffers } = combo;

		return {
			id,
			value,
			name,
			suppliedOffers: suppliedOffers.map((suppliedOffer) =>
				toSuppliedOffer(suppliedOffer)
			),
		};
	}

	function toSuppliedOfferXorCombo(
		supXorCombo: SuppliedOfferXorCombo
	): PresentationModels.SuppliedOfferXorCombo {
		if (isISuppliedOffer(supXorCombo)) {
			return toSuppliedOffer(supXorCombo);
		} else {
			return toCombo(supXorCombo);
		}
	}
};
