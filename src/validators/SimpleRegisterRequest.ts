import { IsEmail, IsOptional, Length } from "class-validator";

export class SimpleRegisterRequest {
	@Length(1, 25)
	displayName!: string;

	@Length(7, 16)
	@IsOptional()
	phone!: string;

	@Length(3, 320)
	@IsEmail()
	email!: string;

	@Length(7, 128)
	password!: string;
}
