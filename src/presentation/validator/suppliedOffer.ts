import { IsIn, IsNumber } from "class-validator";
import { PageValidator } from "./page";

export class SupOfferGetQueryParams {
	@IsIn(["offer", "combo"])
	type!: string;
}

export class SupOfferGetPathParams {
	@IsNumber()
	id!: number;
}

export class SupOfferListPathParams {
	@IsNumber()
	unitStoreId!: number;
}

export class SupOfferListQueryParams extends PageValidator {}
