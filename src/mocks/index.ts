/*import DigitalAccountPrepay from "../models/digitalAccount";
import Product from "../models/product";
import PurchasedBasket from "../models/purchasedBasket";
import Store from "../models/store";
import SuppliedProduct from "../models/suppliedProduct";
import User from "../models/user";
import ProductsBasket from "../models/productsBasket";*/
import { DeepPartial, getRepository } from "typeorm";
import { v4 as uuid } from "uuid";
import { LocalityType } from "../models/address";
import { Store, StoreSector } from "../models/store";
import { User } from "../models/user";

const stores: DeepPartial<Store>[] = [
	{
		cnpj: 57120966000180,
		name: "Kit Clean",
		sector: StoreSector.Laundry,
		image: Buffer.from("./imgs/kit-clean-logo.png"),
		unitaryStores: [
			{
				suppliedOffers: [
					{
						value: 550,
						offer: {
							name: "Lavagem Sem Produto",
							description: "Lavagem com produto do morador",
							presentationImage: Buffer.from("./imgs/kit-clean-service-1.png"),
						},
					},
					{
						value: 750,
						offer: {
							name: "Lavagem Com Produto",
							description: "Lavagem com produto da empresa",
							presentationImage: Buffer.from("./imgs/kit-clean-service-2.png"),
						},
					},
					{
						value: 550,
						offer: {
							name: "Secagem",
							description: "Secagem de roupas",
							presentationImage: Buffer.from("./imgs/kit-clean-service-3.png"),
						},
					},
				],
				address: {
					addressLine1: "SGCV lote 10 condomínio Park Studios Bloco A Loja 01",
					localityType: LocalityType.Workplace,
					city: "Brasília",
					state: "RJ",
					neighborhood: "Park Sul",
					zipCode: 71215100,
					countryCode: 55,
				},
			},
		],
	},
];

const users: DeepPartial<User>[] = [
	{
		displayName: "Conrado",
		password: "123",
		phone: "5521999999999",
		email: "conradopsa@gmail.com",
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

export async function startMocks() {
	await getRepository(Store).save(stores);
	await getRepository(User).save(users);

	console.log("Mocks criados! ");
}
