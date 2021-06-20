import { Request, Response } from "express";
import { Controller, Get, Req, Res } from "routing-controllers";
import { ComboSuppliedOffersRepository } from "../../data/repository/ComboSuppliedOffersRepository";
import { SuppliedOfferRepository } from "../../data/repository/SuppliedOfferRepository";
import { GetSuppliedOffer } from "../../domain/use_case/GetSuppliedOffer";
import { ListSuppliedOffers } from "../../domain/use_case/ListSuppliedOffers";

@Controller()
export default class SuppliedOfferController {
	private supOfferRepo = new SuppliedOfferRepository();
	private comboSupOfferRepo = new ComboSuppliedOffersRepository();

	private listSupOffers = new ListSuppliedOffers(
		this.supOfferRepo,
		this.comboSupOfferRepo
	);

	private getSupOffer = new GetSuppliedOffer(
		this.supOfferRepo,
		this.comboSupOfferRepo
	);

	@Get("/unit-store/:id/supplied-offer")
	async listSuppliedOffer(@Req() request: Request, @Res() response: Response) {
		const { id } = request.params as any;
		const { page, limit } = request.query as any;

		const result = await this.listSupOffers.run({
			unitStoreId: id,
			pagination: { page, limit },
		});

		return response.status(result.status).send(result.data);
	}

	@Get("/supplied-offer/:id")
	async getSuppliedOffer(@Req() request: Request, @Res() response: Response) {
		const { id } = request.params;
		const { type } = request.query as any;

		const result = await this.getSupOffer.run({ id, type });

		return response.status(result.status).send(result.data);
	}
}
