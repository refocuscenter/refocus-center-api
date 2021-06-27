import { validateOrReject } from "class-validator";
import { Request, Response } from "express";
import { Controller, Get, Req, Res } from "routing-controllers";
import { ComboSuppliedOffersRepository } from "../../data/repository/ComboSuppliedOffersRepository";
import { SuppliedOfferRepository } from "../../data/repository/SuppliedOfferRepository";
import {
	GetSuppliedOffer,
	RequestGetSup,
} from "../../domain/use_case/GetSuppliedOffer";
import {
	ListSuppliedOffers,
	RequestListSup,
} from "../../domain/use_case/ListSuppliedOffers";
import { ResultAny } from "../../presentation/util/result";
import { IdValidator } from "../../presentation/validator/IdValidator";
import { PageValidator } from "../../presentation/validator/PageValidator";
import { SuppliedOfferRequestValidator } from "../../presentation/validator/SuppliedOfferRequestValidator";

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
		try {
			const validatedReq = await this.validateListRequest(request);

			const result = await this.listSupOffers.run(validatedReq);

			return response.status(result.status).send(result.data);
		} catch (error) {
			const status = error.status || 500;
			return response.status(status).send(error);
		}
	}

	@Get("/supplied-offer/:id")
	async getSuppliedOffer(@Req() request: Request, @Res() response: Response) {
		try {
			const validatedReq = await this.validateGetRequest(request);

			const result = await this.getSupOffer.run(validatedReq);

			return response.status(result.status).send(result.data);
		} catch (error) {
			const status = error.status || 500;
			return response.status(status).send(error);
		}
	}

	async validateGetRequest(request: Request): Promise<RequestGetSup> {
		try {
			const { id } = request.params;
			const { type } = request.query;

			const validator = Object.assign(new SuppliedOfferRequestValidator(), {
				id: Number(id),
				type: type as string,
			} as SuppliedOfferRequestValidator);

			await validateOrReject(validator);

			return validator;
		} catch (error) {
			throw { status: 400, data: error } as ResultAny;
		}
	}

	async validateListRequest(request: Request): Promise<RequestListSup> {
		try {
			const { id } = request.params;
			const { page, limit } = request.query;

			const pageValidator = Object.assign(new PageValidator(), {
				page: Number(page),
				limit: Number(limit),
			} as PageValidator);

			const idValidator = Object.assign(new IdValidator(), {
				id: Number(id),
			} as IdValidator);

			await validateOrReject(pageValidator);
			await validateOrReject(idValidator);

			return {
				unitStoreId: id,
				pagination: {
					page: pageValidator.page,
					limit: pageValidator.limit,
				},
			};
		} catch (error) {
			throw { status: 400, data: error } as ResultAny;
		}
	}
}
