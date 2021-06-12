import {
	FinancialAccount,
	Offer,
	OfferXorCombo,
	SuppliedOffer,
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

export interface UnitStoreOfferResponse extends ListMetaData {
	offers: OfferXorCombo[];
}

export interface OfferResponse {
	offer: Offer;
}

export interface OffersResponse extends ListMetaData {
	offers: Offer[];
}

export interface SuppliedOfferResponse {
	suppliedOffer: SuppliedOffer;
}

export interface SuppliedOffersResponse extends ListMetaData {
	suppliedOffers: SuppliedOffer[];
}

export interface FinancialAccountResponse {
	financialAccount: FinancialAccount;
}
