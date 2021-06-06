import { DeepPartial } from "typeorm";
import { v4 as uuid } from "uuid";
import { LocalityType } from "../../domain/model/address";
import { Store } from "../model/store";
import { User } from "../model/user";
import { stores } from "./store";

export const users: DeepPartial<User>[] = [
	{
		displayName: "Conrado",
		password: "123",
		phone: "5521999999999",
		email: "conradopsa@gmail.com",
		storeUserAccounts: [{ balance: 1000000, store: stores[0] }],
		userDetails: {
			id: uuid(),
			fullName: "Conrado Pinheiro ...",
			birthDate: "2010-05-08",
			identityDocumentNumber: 401020450,
			addresses: [
				{
					addressLine1: "Rua Acacia Avenue 666",
					localityType: LocalityType.Residence,
					city: "Rio de Janeiro",
					state: "RJ",
					neighborhood: "Japerí",
					zipCode: 21942140,
					countryCode: 55,
				},
			],
		},
	},
	{
		displayName: "Leo K",
		password: "123",
		phone: "5521999999998",
		email: "leoyukku@gmail.com",
		userDetails: {
			id: uuid(),
			fullName: "Leonardo ...",
			birthDate: "01/02/2000",
			identityDocumentNumber: 512042450,
			addresses: [
				{
					addressLine1: "Setor Bancário Sul Q. 3 BL B",
					localityType: LocalityType.Residence,
					city: "Brasília",
					state: "DF",
					neighborhood: "Asa Sul",
					zipCode: 70074900,
					countryCode: 55,
				},
			],
			shopkeeper: {
				unitStores: [(<Store>stores[0]).unitaryStores[0]],
			},
		},
	},
];
