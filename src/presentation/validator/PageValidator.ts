import { IsNumberString, IsOptional } from "class-validator";

export class PageValidator {
	@IsOptional()
	@IsNumberString()
	public page!: number;

	@IsOptional()
	@IsNumberString()
	public limit!: number;
}
