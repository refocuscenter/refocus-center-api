import {
	FinancialAccount,
	Offer,
	SuppliedOfferXorCombo,
	UnitStore,
	User,
} from "../model";

export interface ListMetaData {
	count: number;
}

export interface UserResponse {
	user: User;
}

export interface UsersResponse extends ListMetaData {
	users: User[];
}

export interface UnitStoreResponse {
	unitStore: UnitStore;
}

export interface UnitStoresResponse extends ListMetaData {
	unitStores: UnitStore[];
}

export interface OfferResponse {
	offer: Offer;
}

export interface OffersResponse extends ListMetaData {
	offers: Offer[];
}

export interface SuppliedOfferResponse {
	suppliedOffer: SuppliedOfferXorCombo;
}

export interface SuppliedOffersResponse extends ListMetaData {
	suppliedOffers: SuppliedOfferXorCombo[];
}

export interface FinancialAccountResponse {
	financialAccount: FinancialAccount;
}
