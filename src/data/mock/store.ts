import { DeepPartial } from "typeorm";
import { LocalityType } from "../model/address";
import { Store, StoreSector } from "../model/store";

export const stores: DeepPartial<Store>[] = [
	{
		cnpj: 57120966000180,
		name: "Kit Clean",
		sector: StoreSector.Laundry,
		image: Buffer.from("./img/kit-clean-logo.png"),
		unitaryStores: [
			{
				suppliedOffers: [
					{
						value: 550,
						offer: {
							name: "Lavagem Sem Produto",
							description: "Lavagem com produto do morador",
							presentationImage: Buffer.from("./img/kit-clean-service-1.png"),
						},
					},
					{
						value: 750,
						offer: {
							name: "Lavagem Com Produto",
							description: "Lavagem com produto da empresa",
							presentationImage: Buffer.from("./img/kit-clean-service-2.png"),
						},
					},
					{
						value: 550,
						offer: {
							name: "Secagem",
							description: "Secagem de roupas",
							presentationImage: Buffer.from("./img/kit-clean-service-3.png"),
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
