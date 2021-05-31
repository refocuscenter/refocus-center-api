import { Store, StoreSector } from "../../data/model/store";
import * as PresentationModels from "../model";
import { toBase64Png } from "../util/convert";

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
