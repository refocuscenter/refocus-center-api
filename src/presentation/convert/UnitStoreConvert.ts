import { IUnitStore } from "../../domain/model/unitStore";
import * as PresentationModels from "../model";
import { UnitStoreResponse, UnitStoresResponse } from "../response/success";
import { StoreConvert } from "./StoreConvert";

export const UnitStoreConvert = function () {
	return { toUnitStoreResponse, toUnitStoresResponse };

	function toUnitStoreResponse(unitStore: IUnitStore): UnitStoreResponse {
		return {
			unitStore: toUnitStore(unitStore),
		};
	}

	function toUnitStoresResponse(
		unitStores: IUnitStore[],
		count: number
	): UnitStoresResponse {
		return {
			unitStores: unitStores.map((unitStore) => {
				return toUnitStore(unitStore);
			}),
			count: count,
		};
	}

	function toUnitStore(unitStore: IUnitStore): PresentationModels.UnitStore {
		const { toStore } = StoreConvert();

		return { id: unitStore.id, store: toStore(unitStore.store) };
	}
};
