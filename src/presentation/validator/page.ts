import { IsNumber, IsOptional } from "class-validator";

export class PageValidator {
	@IsOptional()
	@IsNumber()
	public page!: number;

	@IsOptional()
	@IsNumber()
	public limit!: number;
}
