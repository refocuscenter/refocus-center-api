import { OfferXorCombo, StoreUserAccount, UnitStore, User } from "./models";

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

export interface UserStoreAccountResponse {
	storeAccount: StoreUserAccount;
}
