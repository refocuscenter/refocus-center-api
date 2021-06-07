import { ISuppliedOffer } from "../../domain/model/suppliedOffer";
import * as PresentationModels from "../model";
import {
	SuppliedOfferResponse,
	SuppliedOffersResponse,
} from "../response/success";
import { toBase64Png } from "../util/convert";

export const SuppliedOfferConvert = function () {
	return { toSuppliedOffersResponse, toSuppliedOfferResponse };

	function toSuppliedOfferResponse(
		offer: ISuppliedOffer
	): SuppliedOfferResponse {
		return {
			suppliedOffer: toSuppliedOffer(offer),
		};
	}

	function toSuppliedOffersResponse(
		offers: ISuppliedOffer[],
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
};
