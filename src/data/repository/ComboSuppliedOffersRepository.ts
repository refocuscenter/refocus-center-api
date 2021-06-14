import { getRepository } from "typeorm";
import { IComboSuppliedOffers } from "../../domain/model/comboSuppliedOffers";
import { ComboSuppliedOffers } from "../model/comboSuppliedOffer";
import { Id, IPagination } from "../util/types";

export interface IComboSuppliedOffersRepository {
	findOne: (id: Id) => Promise<IComboSuppliedOffers | undefined>;
	findAndCount: (
		unitStoreId: Id,
		pagination: IPagination
	) => Promise<[IComboSuppliedOffers[], number]>;
}

export class ComboSuppliedOffersRepository
	implements IComboSuppliedOffersRepository
{
	private repositoryTypeORM = getRepository(ComboSuppliedOffers);

	async findAndCount(unitStoreId: Id, { limit, page }: IPagination) {
		return await this.repositoryTypeORM.findAndCount({
			where: { unitStore: { id: unitStoreId } },
			loadEagerRelations: true,
			take: limit,
			skip: page * limit,
		});
	}

	async findOne(id: Id) {
		return await this.repositoryTypeORM.findOne(id);
	}
}
