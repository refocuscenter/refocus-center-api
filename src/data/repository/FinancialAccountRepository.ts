import { getRepository } from "typeorm";
import { IFinancialAccount as IFinancialAccount } from "../../domain/model/financialAccount";
import { FinancialAccount } from "../model/financialAccount";
import { Id } from "../util/types";

export interface IFinancialAccountRepository {
	findOne: (userId: Id, storeId: Id) => Promise<IFinancialAccount | undefined>;
}

export class FinancialAccountRepository implements IFinancialAccountRepository {
	private repositoryTypeORM = getRepository(FinancialAccount);

	async findOne(
		userId: Id,
		storeId: Id
	): Promise<FinancialAccount | undefined> {
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
