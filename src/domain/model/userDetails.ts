/**
 * Pessoa física ou Jurídica
 */
/*export enum Person {
    NaturalPerson,
    JuridicalPerson
}*/

import { IAddress } from "./address";
import { IDeliveryMan } from "./deliveryMan";
import { IShopkeeper } from "./shopkeeper";
import { IUser } from "./user";

export interface IUserDetails {
	id: string;

	fullName: string;

	identityDocumentNumber: number; //RG

	//
	//cpfCnpj: string | null;

	//
	//person: Person;

	birthDate: Date;

	user: IUser;

	addresses: IAddress[];

	deliveryMan: IDeliveryMan | null;

	shopkeeper: IShopkeeper | null;
}
