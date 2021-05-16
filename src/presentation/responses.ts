import { OfferXorCombo, Store, StoreUserAccount, User } from "./models";

export interface ListMetaData {
	count: number;
}

export interface UsersResponse extends ListMetaData {
	users: User[];
}

export interface UserResponse {
	user: User;
}

export interface UnitStoreResponse {
	store: Store;
}

export interface UnitStoreOfferResponse extends ListMetaData {
	offers: OfferXorCombo[];
}

export interface UserStoreAccountResponse {
	storeAccount: StoreUserAccount;
}
