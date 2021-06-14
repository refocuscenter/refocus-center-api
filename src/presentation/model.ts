import { XOR } from "./util/operator";

export interface User {
	id: number;
	displayName: string;
	phone: string;
	email: string;
	userDetails: UserDetails;
	// profilePhoto: string;
}

export interface UserDetails {
	fullName: string;
	identityDocumentNumber: number;
	birthDate: Date;
	addresses: Address[];
}

export interface Address {
	id: number;
	addressLines: string[];
	localityType: string;
	city: string;
	state: string;
	neighborhood: string;
	zipCode: number;
	countryCode: number;
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
	portion: SuppliedOfferPortion;
}

/**
 * Aquilo que se oferece (serviço ou produto)
 * What is offered (service or product)
 */
export interface Offer {
	id: number;
	name: string;
	image: string;
	description: string;
}

export interface SuppliedOfferPortion {
	amount: number;
	suppliedOffer: SuppliedOfferXorCombo;
}

/**
 * Supplied Offer is offers available of a unitary store
 * Offers is services and products
 */
export interface SuppliedOffer {
	id: number;
	offer: Offer;
	value: number;

	/**
	 * Only for Products, services not have stockAmount
	 */
	stockAmount?: number;
}

export type SuppliedOfferXorCombo = XOR<SuppliedOffer, ComboSuppliedOffer>;

export interface ComboSuppliedOffer {
	id: number;
	name: string;
	value: number;
	suppliedOffers: SuppliedOffer[];
}

export interface SuppliedOfferPortion {
	amount: number;
	suppliedOffer: SuppliedOfferXorCombo;
}

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

export interface FinancialAccount {
	id: number;
	user: User;
	balance: number;
	store: Store;
}
