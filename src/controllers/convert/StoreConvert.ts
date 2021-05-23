import { Store, StoreSector } from "../../models/store";
import * as PresentationModels from "../../presentation/models";
import { toBase64Png } from "../../utils/convert";

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
