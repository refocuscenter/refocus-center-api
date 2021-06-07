import { getRepository } from "typeorm";
import { ISuppliedOffer } from "../../domain/model/suppliedOffer";
import { SuppliedOffer } from "../model/suppliedOffer";
import { Id, IPagination } from "../util/types";

export interface ISuppliedOfferRepository {
	findOne: (id: Id) => Promise<ISuppliedOffer | undefined>;
	findAndCount: (
		unitStoreId: Id,
		pagination: IPagination
	) => Promise<[ISuppliedOffer[], number]>;
}

export class SuppliedOfferRepository implements ISuppliedOfferRepository {
	private repositoryTypeORM = getRepository(SuppliedOffer);

	async findAndCount(unitStoreId: Id, { limit, page }: IPagination) {
		return await this.repositoryTypeORM.findAndCount({
			where: { unitStore: { id: unitStoreId } },
			loadEagerRelations: true,
			take: limit,
			skip: page * limit,
		});
	}

	async findOne(id: Id): Promise<ISuppliedOffer | undefined> {
		return await this.repositoryTypeORM.findOne(id);
	}
}
