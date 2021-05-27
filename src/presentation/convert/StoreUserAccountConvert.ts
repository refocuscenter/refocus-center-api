import { StoreUserAccount } from "../../data/models/StoreUserAccount";
import * as PresentationModels from "../models";
import { StoreUserAccountResponse } from "../responses";
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
