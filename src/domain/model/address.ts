import { IDelivery } from "./delivery";
import { IUnitStore } from "./unitStore";
import { IUserDetails } from "./userDetails";

export enum CountryCode {
	Brazil = 55,
}

export enum LocalityType {
	Residence, //Local de residência
	Workplace, //Local de trabalho
	Other = 99,
}

export interface IAddress {
	id: number;

	localityType: LocalityType;

	addressLine1: string;

	addressLine2: string | null;

	addressLine3: string | null;

	city: string;

	state: string;

	neighborhood: string; //bairro

	zipCode: number;

	countryCode: CountryCode;

	userDetails: IUserDetails | null;

	deliveries: IDelivery[] | null;

	unitStore: IUnitStore | null;
}
