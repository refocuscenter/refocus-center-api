import {
	Controller,
	Get,
	NotFoundError,
	Params,
	QueryParams,
} from "routing-controllers";
import { ComboSuppliedOffersRepository } from "../../data/repository/ComboSuppliedOffersRepository";
import { SuppliedOfferRepository } from "../../data/repository/SuppliedOfferRepository";
import { GetSuppliedOffer } from "../../domain/use_case/GetSuppliedOffer";
import { ListSuppliedOffers } from "../../domain/use_case/ListSuppliedOffers";
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

	@Get("/unit-store/:unitStoreId/supplied-offer")
	async listSuppliedOffer(
		@Params() params: SupOfferListPathParams,
		@QueryParams() query: SupOfferListQueryParams
	) {
		const { offersAndCombos, totalCount } = await this.listSupOffers.run({
			unitStoreId: params.unitStoreId,
			pagination: {
				page: query.page,
				limit: query.limit,
			},
		});

		return toSuppliedOffersResponse(offersAndCombos, totalCount);
	}

	@Get("/supplied-offer/:id")
	async getSuppliedOffer(
		@Params() params: SupOfferGetPathParams,
		@QueryParams() query: SupOfferGetQueryParams
	) {
		const supOffer = await this.getSupOffer.run({
			id: params.id,
			type: query.type,
		});

		if (supOffer === undefined) {
			throw new NotFoundError(NOT_FOUND);
		}

		return toSuppliedOfferResponse(supOffer);
	}
}
