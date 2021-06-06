import { IOffer } from "./offer";
import { IUnitStore } from "./unitStore";

export interface ISuppliedOffer {
	id: number;

	value: number;

	stockAmount: number | null;

	unitStore: IUnitStore;

	offer: IOffer;
}
