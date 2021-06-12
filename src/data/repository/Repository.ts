import { FindManyOptions, FindOneOptions, getRepository } from "typeorm";
import { Id, IPagination } from "../util/types";

export interface IRepository<IEntity> {
	findAndCount: (pagination: IPagination) => Promise<[IEntity[], number]>;
	findOne: (id: Id) => Promise<IEntity | undefined>;
}

/**
 * Generic implementation for TypeORM Repository
 * This is good only for common behaviors
 */
export class Repository<Entity> implements IRepository<Entity> {
	private repositoryTypeORM = getRepository<Entity>(this.entity);

	constructor(
		protected entity: { new (): Entity },
		protected findManyOptions: FindManyOptions<Entity> = {
			loadEagerRelations: true,
		},
		protected findOneOptions?: FindOneOptions<Entity>
	) {}

	async findAndCount({ limit, page }: IPagination) {
		return await this.repositoryTypeORM.findAndCount({
			...this.findManyOptions,
			take: limit,
			skip: page * limit,
		});
	}

	async findOne(id: Id) {
		return await this.repositoryTypeORM.findOne(id, this.findOneOptions);
	}
}
