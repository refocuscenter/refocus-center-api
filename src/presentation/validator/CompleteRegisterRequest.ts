import { Length } from "class-validator";
import { AddressRequest } from "./AddressRequest";

export class CompleteRegisterRequest {
	@Length(1, 25)
	displayName!: string;

	fullName!: string;

	identityDocumentNumber!: string;

	birthDate!: Date;

	phone!: string;

	addresses!: AddressRequest[];
}
