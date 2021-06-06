import { IOffer } from "./offer";
import { IPurchase } from "./purchase";
import { ISignedPlan } from "./signedPlan";
import { IUnitStore } from "./unitStore";

/**
 * Produtos de extrato
 */
export interface IStatementItem {
	id: number;

	value: number;

	amount: number;

	name: string;

	description: string;

	purchase: IPurchase;

	unitStore: IUnitStore;

	offer: IOffer | null;

	signedPlan: ISignedPlan | null;
}
