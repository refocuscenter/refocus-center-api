import {
	Controller,
	Get,
	NotFoundError,
	Params,
	QueryParams,
} from "routing-controllers";
import { ComboSuppliedOffersRepository } from "../../data/repository/ComboSuppliedOffersRepository";
import { SuppliedOfferRepository } from "../../data/repository/SuppliedOfferRepository";
import { SuppliedOfferUseCase } from "../../domain/use_case/SuppliedOfferUseCase";
import { SuppliedOfferConvert } from "../../presentation/convert/SuppliedOfferConvert";
import {
	SupOfferGetPathParams,
	SupOfferGetQueryParams,
	SupOfferListPathParams,
	SupOfferListQueryParams,
} from "../../presentation/validator/suppliedOffer";
const NOT_FOUND = "Supplied Offer not found";

const { toSuppliedOfferResponse, toSuppliedOffersResponse } =
	SuppliedOfferConvert();

@Controller()
export default class SuppliedOfferController {
	private useCase = SuppliedOfferUseCase(
		new SuppliedOfferRepository(),
		new ComboSuppliedOffersRepository()
	);

	@Get("/unit-store/:unitStoreId/supplied-offer")
	async list(
		@Params() params: SupOfferListPathParams,
		@QueryParams() query: SupOfferListQueryParams
	) {
		const { offersAndCombos, totalCount } = await this.useCase.list({
			unitStoreId: params.unitStoreId,
			pagination: {
				page: query.page,
				limit: query.limit,
			},
		});

		return toSuppliedOffersResponse(offersAndCombos, totalCount);
	}

	@Get("/supplied-offer/:id")
	async get(
		@Params() params: SupOfferGetPathParams,
		@QueryParams() query: SupOfferGetQueryParams
	) {
		const supOffer = await this.useCase.get({
			id: params.id,
			type: query.type,
		});

		if (supOffer === undefined) {
			throw new NotFoundError(NOT_FOUND);
		}

		return toSuppliedOfferResponse(supOffer);
	}
}
