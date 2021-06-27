import { IsNumber } from "class-validator";

export class SuppliedOfferRequestValidator {
	@IsNumber()
	id!: number;

	type!: string;
}
