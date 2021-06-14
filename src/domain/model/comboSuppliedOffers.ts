import { ISuppliedOffer } from "./suppliedOffer";
import { IUnitStore } from "./unitStore";

export interface IComboSuppliedOffers {
	id: number;

	value: number;

	name: string;

	suppliedOffers: ISuppliedOffer[];

	unitStore: IUnitStore;
}
