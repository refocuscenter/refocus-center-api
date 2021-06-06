import { IAddress } from "./address";
import { IShopkeeper } from "./shopkeeper";
import { IStore } from "./store";
import { IStoreHighlight } from "./storeHighlight";
import { ISuppliedOffer } from "./suppliedOffer";

export interface IUnitStore {
	id: number;

	shopkeepers: IShopkeeper[];

	storeHighlights: IStoreHighlight[] | null;

	suppliedOffers: ISuppliedOffer[] | null;

	store: IStore;

	address: IAddress;
}
