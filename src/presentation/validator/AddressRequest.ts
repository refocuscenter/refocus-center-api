import { Length } from "class-validator";
import { LocalityType } from "../../data/model/address";

export class AddressRequest {
	localityType!: LocalityType;

	@Length(1, 3)
	addressLines!: string[];

	city!: string;

	state!: string;

	neighborhood!: string;

	zipCode!: string;

	countryCode!: number;
}
