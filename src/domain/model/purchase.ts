import { ICard } from "./card";
import { IDelivery } from "./delivery";
import { IStatementItem } from "./statementItem";
import { IStoreUserAccount } from "./storeUserAccount";

export enum PaymentFormat {
	PhysicalMoney,
	CestouCard,
}

export interface IPurchase {
	id: number;

	value: number;

	amount: number;

	paymentFormat: PaymentFormat;

	storeUserAccount: IStoreUserAccount | null;

	card: ICard | null;

	delivery: IDelivery | null;

	statementItems: IStatementItem[];
}
