import { IsEmail, IsOptional } from "class-validator";

export class LoginValidator {
	@IsOptional()
	phone!: string;

	@IsEmail()
	@IsOptional()
	email!: string;

	password!: string;
}
