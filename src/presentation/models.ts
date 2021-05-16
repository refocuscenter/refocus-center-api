import { XOR } from "../utils/operators";

export interface User {
	id: number;
	displayName: string;
	// profilePhoto: string;
}

export interface UserAccountStore {
	balance: number;
	store: Store;
	basket: Basket;
}

export interface Basket {
	basketItems: BasketItem[];
}

export interface BasketItem {
	// totalValue?: number;
	portion: Portion;
}

export interface Portion {
	amount: number;
	offer: OfferXorCombo;
}

/**
 * Aquilo que se oferece (serviço ou produto)
 * What is offered (service or product)
 */
export interface Offer {
	id: number;
	name: string;
	image: string;
	value: number;
}

export interface Combo<Offer> {
	id: number;
	name: string;
	value: number;
	offers: Offer[];
}

export type OfferXorCombo = XOR<Offer, Combo<Offer>>;
export type ProductXorCombo = XOR<Product, Combo<Product>>;
export type ServiceXorCombo = XOR<Service, Combo<Service>>;

export interface Product extends Offer {}

export interface Service extends Offer {}

export interface OfferCategory {
	offer: Offer;
	categories: string[];
}

export interface UnitStore {
	id: number;
	name?: string;
	image?: string;
	store: Store;
}

export interface Store {
	id: number;
	name: string;
	sector: string;
	image: string;
	cnpj: number;
}

export interface StoreUserAccount {
	id: number;
	user: User;
	balance: number;
	store: Store;
}
