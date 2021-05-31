import { StoreUserAccount } from "../../data/model/storeUserAccount";
import * as PresentationModels from "../model";
import { StoreUserAccountResponse } from "../response/success";
import { StoreConvert } from "./StoreConvert";
import { UserConvert } from "./UserConvert";

export const StoreUserAccountConvert = function () {
	return { toStoreUserAccountResponse };

	function toStoreUserAccountResponse(
		storeUserAccount: StoreUserAccount
	): StoreUserAccountResponse {
		return {
			storeUserAccount: toStoreUserAccount(storeUserAccount),
		};
	}

	function toStoreUserAccount(
		storeUserAccount: StoreUserAccount
	): PresentationModels.StoreUserAccount {
		const { id, balance, store, user } = storeUserAccount;

		const { toStore } = StoreConvert();
		const { toUser } = UserConvert();

		return {
			id,
			balance,
			user: toUser(user),
			store: toStore(store),
		};
	}
};
