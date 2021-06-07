import { IUnitStore } from "../../domain/model/unitStore";
import { UnitStore } from "../model/unitStore";
import { IRepository, Repository } from "./Repository";

export interface IUnitStoreRepository extends IRepository<IUnitStore> {}

export class UnitStoreRepository
	extends Repository<UnitStore>
	implements IUnitStoreRepository
{
	constructor() {
		super(UnitStore);
	}
}
