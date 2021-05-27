import { Store, StoreSector } from "../../data/models/store";
import { toBase64Png } from "../../utils/convert";
import * as PresentationModels from "../models";

export const StoreConvert = function () {
	return { toStore };

	function toStore(store: Store): PresentationModels.Store {
		return {
			cnpj: store.cnpj,
			id: store.id,
			image: toBase64Png(store.image),
			name: store.name,
			sector: StoreSector[store.sector].toString(),
		};
	}
};
