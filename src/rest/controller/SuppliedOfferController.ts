import { Request, Response } from "express";
import { Controller, Get, Req, Res } from "routing-controllers";
import { ComboSuppliedOffersRepository } from "../../data/repository/ComboSuppliedOffersRepository";
import { SuppliedOfferRepository } from "../../data/repository/SuppliedOfferRepository";
import { ListSuppliedOffersXorCombos } from "../../domain/use_case/ListSuppliedOffersXorCombos";

const SUPPLIED_OFFER_NOT_FOUND = "Supplied Offer not found";

@Controller()
export default class SuppliedOfferController {
	private supOfferRepo = new SuppliedOfferRepository();
	private comboSupOfferRepo = new ComboSuppliedOffersRepository();

	private listUseCase = new ListSuppliedOffersXorCombos(
		this.supOfferRepo,
		this.comboSupOfferRepo
	);

	@Get("/unit-store/:id/supplied-offer")
	async listSuppliedOffer(@Req() request: Request, @Res() response: Response) {
		const { id } = request.params as any;
		const { page, limit } = request.query as any;

		const result = await this.listUseCase.run({
			id,
			pagination: { page, limit },
		});

		return response.status(result.status).send(result.data);
	}

	/*@Get("/supplied-offer/:id")
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
	}*/
}
