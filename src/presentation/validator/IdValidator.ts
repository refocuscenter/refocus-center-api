import { IsNumber } from "class-validator";

export class IdValidator {
	@IsNumber()
	id!: number;
}
