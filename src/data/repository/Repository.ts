import { getRepository } from "typeorm";
import { Id, IPagination } from "../util/types";

export interface IRepository<IEntity> {
	findAndCount: (pagination: IPagination) => Promise<[IEntity[], number]>;
	findOne: (id: Id) => Promise<IEntity | undefined>;
}

/**
 * Generic implementation for TypeORM Repository
 */
export class Repository<Entity> implements IRepository<Entity> {
	private repositoryTypeORM = getRepository<Entity>(this.entity);

	constructor(protected entity: { new (): Entity }) {}

	async findAndCount({ limit, page }: IPagination) {
		return await this.repositoryTypeORM.findAndCount({
			loadEagerRelations: true,
			take: limit,
			skip: page * limit,
		});
	}

	async findOne(id: Id) {
		return await this.repositoryTypeORM.findOne(id);
	}
}
