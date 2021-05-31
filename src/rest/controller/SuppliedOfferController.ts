import { Request, Response } from "express";
import { Controller, Get, Req, Res } from "routing-controllers";
import { getRepository } from "typeorm";
import { SuppliedOffer } from "../../data/model/suppliedOffer";
import { SuppliedOfferConvert } from "../../presentation/convert/SuppliedOfferConvert";
import { responseError500 } from "../util/error";

const SUPPLIED_OFFER_NOT_FOUND = "Supplied Offer not found";

@Controller()
export default class SuppliedOfferController {
	private suppliedOfferRepository = getRepository(SuppliedOffer);

	@Get("/unit-store/:id/supplied-offer")
	async listSuppliedOffer(@Req() request: Request, @Res() response: Response) {
		const { id } = request.params as any;
		const { page = 0, limit = 10 } = request.query as any;

		try {
			const [suppliedOffers, count] =
				await this.suppliedOfferRepository.findAndCount({
					where: { unitStore: { id } },
					loadEagerRelations: true,
					take: limit,
					skip: page * limit,
				});

			const { toSuppliedOffersResponse } = SuppliedOfferConvert();

			return toSuppliedOffersResponse(suppliedOffers, count);
		} catch (error) {
			responseError500(response, error);
		}
	}

	@Get("/supplied-offer/:id")
	async getSuppliedOffer(@Req() request: Request, @Res() response: Response) {
		const { id } = request.params;

		try {
			const suppliedOffers = await this.suppliedOfferRepository.findOne(id);

			if (suppliedOffers === undefined) {
				return response.status(404).send(SUPPLIED_OFFER_NOT_FOUND);
			}

			const { toSuppliedOfferResponse } = SuppliedOfferConvert();

			return toSuppliedOfferResponse(suppliedOffers);
		} catch (error) {
			responseError500(response, error);
		}
	}
}
