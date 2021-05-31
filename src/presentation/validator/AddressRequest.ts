import { Length } from "class-validator";
import { LocalityType } from "../../data/model/address";

export class AddressRequest {
	localityType!: LocalityType;

	@Length(1, 3)
	addressLines!: String[];

	city!: String;

	state!: String;

	neighborhood!: String;

	zipCode!: String;

	countryCode!: number;
}