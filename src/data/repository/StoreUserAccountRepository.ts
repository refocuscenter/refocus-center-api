import { getRepository } from "typeorm";
import { IStoreUserAccount } from "../../domain/model/storeUserAccount";
import { StoreUserAccount } from "../model/storeUserAccount";
import { Id } from "../util/types";

export interface IStoreUserAccountRepository {
	findOne: (userId: Id, storeId: Id) => Promise<IStoreUserAccount | undefined>;
}

export class StoreUserAccountRepository implements IStoreUserAccountRepository {
	private repositoryTypeORM = getRepository(StoreUserAccount);

	async findOne(
		userId: Id,
		storeId: Id
	): Promise<StoreUserAccount | undefined> {
		return await this.repositoryTypeORM.findOne({
			where: {
				user: {
					id: userId,
				},
				store: {
					id: storeId,
				},
			},
		});
	}
}
