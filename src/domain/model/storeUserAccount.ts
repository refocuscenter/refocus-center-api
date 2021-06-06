import { ICard } from "./card";
import { IPurchase } from "./purchase";
import { IStore } from "./store";
import { IUser } from "./user";

export interface IStoreUserAccount {
	id: number;

	/**
	 * Value in centavos
	 */
	balance: number;

	purchases: IPurchase[] | null;

	card: ICard | null;

	store: IStore;

	user: IUser;
}
