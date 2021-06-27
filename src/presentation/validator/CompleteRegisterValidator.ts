import { Length } from "class-validator";

export class CompleteRegisterValidator {
	@Length(1, 25)
	displayName!: string;

	fullName!: string;

	identityDocumentNumber!: string;

	birthDate!: Date;

	phone!: string;
}
