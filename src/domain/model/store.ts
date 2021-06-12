import { IFinancialAccount } from "./financialAccount";
import { IUnitStore } from "./unitStore";

export enum StoreSector {
	/**
	 * Lavanderia
	 */
	Laundry,
}

export interface IStore {
	id: number;

	cnpj: number;

	name: string;

	sector: StoreSector;

	image: Buffer;

	unitaryStores: IUnitStore[];

	financialAccounts: IFinancialAccount[] | null;
}
