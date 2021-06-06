import { ISignedPlan } from "./signedPlan";
import { IUnitStore } from "./unitStore";
import { IUserDetails } from "./userDetails";

export interface IShopkeeper {
	id: number;

	userDetails: IUserDetails;

	unitStores: IUnitStore[];

	signedPlan: ISignedPlan[] | null;
}
