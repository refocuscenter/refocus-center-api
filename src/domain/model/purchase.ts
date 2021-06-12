import { ICard } from "./card";
import { IDelivery } from "./delivery";
import { IFinancialAccount } from "./financialAccount";
import { IStatementItem } from "./statementItem";

export enum PaymentFormat {
	PhysicalMoney,
	CestouCard,
}

export interface IPurchase {
	id: number;

	value: number;

	amount: number;

	paymentFormat: PaymentFormat;

	financialAccount: IFinancialAccount | null;

	card: ICard | null;

	delivery: IDelivery | null;

	statementItems: IStatementItem[];
}
