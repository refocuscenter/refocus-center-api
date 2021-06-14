import { DeepPartial } from "typeorm";
import { LocalityType } from "../../domain/model/address";
import { StoreSector } from "../../domain/model/store";
import { ComboSuppliedOffers } from "../model/comboSuppliedOffer";
import { Store } from "../model/store";
import { SuppliedOffer } from "../model/suppliedOffer";
import { UnitStore } from "../model/unitStore";

type MapOfSuppliedOffers = {
	[suppliedOffer: string]: DeepPartial<SuppliedOffer>;
};

export const kitCleanSuppliedOffers: MapOfSuppliedOffers = {
	washWithoutProduct: {
		value: 550,
		offer: {
			name: "Lavagem Sem Produto",
			description: "Lavagem com produto do morador",
			presentationImage: Buffer.from("./img/kit-clean-service-1.png"),
		},
	},
	washWithProduct: {
		value: 750,
		offer: {
			name: "Lavagem Com Produto",
			description: "Lavagem com produto da empresa",
			presentationImage: Buffer.from("./img/kit-clean-service-2.png"),
		},
	},
	drying: {
		value: 550,
		offer: {
			name: "Secagem",
			description: "Secagem de roupas",
			presentationImage: Buffer.from("./img/kit-clean-service-3.png"),
		},
	},
};

export const kitCleanComboSuppliedOffers: DeepPartial<ComboSuppliedOffers>[] = [
	{
		name: "Combo Lavagem com Produto + Secagem",
		value: 1300,
		suppliedOffers: [
			kitCleanSuppliedOffers.washWithoutProduct,
			kitCleanSuppliedOffers.drying,
		],
	},
];

export const kitCleanUnitBrasilia: DeepPartial<UnitStore> = {
	id: 1,
	suppliedOffers: [
		kitCleanSuppliedOffers.washWithoutProduct,
		kitCleanSuppliedOffers.washWithProduct,
		kitCleanSuppliedOffers.drying,
	],
	comboSuppliedOffers: kitCleanComboSuppliedOffers,
	address: {
		addressLine1: "SGCV lote 10 condomínio Park Studios Bloco A Loja 01",
		localityType: LocalityType.Workplace,
		city: "Brasília",
		state: "RJ",
		neighborhood: "Park Sul",
		zipCode: 71215100,
		countryCode: 55,
	},
};

export const stores: DeepPartial<Store>[] = [
	{
		cnpj: 57120966000180,
		name: "Kit Clean",
		sector: StoreSector.Laundry,
		image: Buffer.from("./img/kit-clean-logo.png"),
		unitaryStores: [kitCleanUnitBrasilia],
	},
];
