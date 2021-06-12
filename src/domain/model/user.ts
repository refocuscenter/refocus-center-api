import { IFinancialAccount } from "./financialAccount";
import { IUnitStore } from "./unitStore";
import { IUserDetails } from "./userDetails";

export interface IUser {
	id: number;

	displayName: string;

	phone: string;

	email: string;

	password: string;

	userDetails: IUserDetails;

	//Isso aqui pode vir de uma base de dados não relacional
	favoriteUnitStores: IUnitStore[];

	financialAccounts: IFinancialAccount[];
}
