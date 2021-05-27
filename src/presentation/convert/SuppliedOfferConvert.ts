import * as DataModels from "../../data/models/suppliedOffer";
import { toBase64Png } from "../../utils/convert";
import * as PresentationModels from "../models";
import { SuppliedOfferResponse, SuppliedOffersResponse } from "../responses";

export const SuppliedOfferConvert = function () {
	return { toSuppliedOffersResponse, toSuppliedOfferResponse };

	function toSuppliedOfferResponse(
		offer: DataModels.SuppliedOffer
	): SuppliedOfferResponse {
		return {
			suppliedOffer: toSuppliedOffer(offer),
		};
	}

	function toSuppliedOffersResponse(
		offers: DataModels.SuppliedOffer[],
		count: number
	): SuppliedOffersResponse {
		return {
			suppliedOffers: offers.map((offer) => {
				return toSuppliedOffer(offer);
			}),
			count: count,
		};
	}

	function toSuppliedOffer(
		suppliedOffer: DataModels.SuppliedOffer
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
};
