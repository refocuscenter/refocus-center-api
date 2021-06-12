import { IFinancialAccount } from "./financialAccount";
import { IPurchase } from "./purchase";

export enum ExistenceType {
	Virtual,
	Physical,
}

export enum FinancialType {
	PostPaid,
	PrePaid,
}

export interface ICard {
	id: number;

	financialType: FinancialType;

	existenceType: ExistenceType;

	/**
	 * Value in centavos
	 */
	limit: number | null;

	/**
	 * Value in centavos
	 */
	balance: number;

	pan: string; //Primary Account Number

	cvv: string;

	dateExp: string;

	cardHolder: string;

	purchases: IPurchase[] | null;

	financialAccount: IFinancialAccount;
}
