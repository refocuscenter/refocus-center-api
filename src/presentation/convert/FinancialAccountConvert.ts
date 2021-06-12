import { IFinancialAccount } from "../../domain/model/financialAccount";
import * as PresentationModels from "../model";
import { FinancialAccountResponse } from "../response/success";
import { StoreConvert } from "./StoreConvert";
import { UserConvert } from "./UserConvert";

export const FinancialAccountConvert = function () {
	return { toFinancialAccountResponse };

	function toFinancialAccountResponse(
		financialAccount: IFinancialAccount
	): FinancialAccountResponse {
		return {
			financialAccount: toFinancialAccount(financialAccount),
		};
	}

	function toFinancialAccount(
		financialAccount: IFinancialAccount
	): PresentationModels.FinancialAccount {
		const { id, balance, store, user } = financialAccount;

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
