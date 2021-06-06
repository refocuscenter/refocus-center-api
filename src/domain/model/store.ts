import { IStoreUserAccount } from "./storeUserAccount";
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

	storeUserAccounts: IStoreUserAccount[] | null;
}
