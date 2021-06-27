import { Length } from "class-validator";
import { LocalityType } from "../../domain/model/address";

export class AddressValidator {
	localityType!: LocalityType;

	@Length(1, 3)
	addressLines!: string[];

	city!: string;

	state!: string;

	neighborhood!: string;

	zipCode!: string;

	countryCode!: number;
}
