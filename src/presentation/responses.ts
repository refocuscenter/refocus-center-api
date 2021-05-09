import { OfferXorCombo, Store, StoreUserAccount, User } from "./models";

export interface Pagination {
	hasNextPage: boolean;
}

export interface UsersResponse extends Pagination {
	users: User[];
}

export interface UserResponse extends Pagination {
	user: User;
}

export interface UnitStoreResponse extends Pagination {
	store: Store;
}

export interface UnitStoreOfferResponse extends Pagination {
	offers: OfferXorCombo[];
}

export interface UserStoreAccountResponse extends Pagination {
	storeAccount: StoreUserAccount;
}
