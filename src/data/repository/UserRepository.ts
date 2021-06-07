import { getRepository } from "typeorm";
import { IUser } from "../../domain/model/user";
import { User } from "../model/user";
import { Id, IPagination } from "../util/types";

export interface IUserRepository {
	findAndCount: (pagination: IPagination) => Promise<[IUser[], number]>;
	findOne: (id: Id) => Promise<IUser | undefined>;
}

export class UserRepository implements IUserRepository {
	private userRepositoryTypeORM = getRepository(User);

	async findAndCount({ limit, page }: IPagination) {
		return await this.userRepositoryTypeORM.findAndCount({
			loadEagerRelations: true,
			take: limit,
			skip: page * limit,
		});
	}

	async findOne(id: Id) {
		return await this.userRepositoryTypeORM.findOne(id);
	}
}
