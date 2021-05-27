import { UnitStore } from "../../data/models/unitStore";
import * as PresentationModels from "../models";
import { UnitStoreResponse, UnitStoresResponse } from "../responses";
import { StoreConvert } from "./StoreConvert";

export const UnitStoreConvert = function () {
	return { toUnitStoreResponse, toUnitStoresResponse };

	function toUnitStoreResponse(unitStore: UnitStore): UnitStoreResponse {
		return {
			unitStore: toUnitStore(unitStore),
		};
	}

	function toUnitStoresResponse(
		unitStores: UnitStore[],
		count: number
	): UnitStoresResponse {
		return {
			unitStores: unitStores.map((unitStore) => {
				return toUnitStore(unitStore);
			}),
			count: count,
		};
	}

	function toUnitStore(unitStore: UnitStore): PresentationModels.UnitStore {
		const { toStore } = StoreConvert();

		return { id: unitStore.id, store: toStore(unitStore.store) };
	}
};
