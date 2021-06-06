import { IHighlightsPlan } from "./highlightPlan";
import { IShopkeeper } from "./shopkeeper";
import { IStoreHighlight } from "./storeHighlight";

export interface ISignedPlan {
	id: number;

	contractedValue: number;

	shopkeeper: IShopkeeper;

	highlightPlan: IHighlightsPlan;

	storeHighlight: IStoreHighlight[] | null;
}
