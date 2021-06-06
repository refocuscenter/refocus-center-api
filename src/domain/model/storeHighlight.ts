import { ISignedPlan } from "./signedPlan";
import { IUnitStore } from "./unitStore";

export interface IStoreHighlight {
	id: number;

	bannerImage: Buffer;

	title: String;

	unitStore: IUnitStore;

	signedPlan: ISignedPlan | null;
}
