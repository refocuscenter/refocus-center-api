import { XOR } from "../../presentation/util/operator";
import { IComboSuppliedOffers } from "./comboSuppliedOffers";
import { ISuppliedOffer } from "./suppliedOffer";

export type SuppliedOfferXorCombo = XOR<ISuppliedOffer, IComboSuppliedOffers>;

export function isISuppliedOffer(
	obj: SuppliedOfferXorCombo
): obj is ISuppliedOffer {
	return obj && "offer" in obj;
}
