import { Request, Response } from "express";
import { Controller, Get, Req, Res } from "routing-controllers";
import { getRepository } from "typeorm";
import { StoreUserAccount } from "../../data/model/storeUserAccount";
import { StoreUserAccountConvert } from "../../presentation/convert/StoreUserAccountConvert";
import { responseError404, responseError500 } from "../util/error";

const STORE_USER_ACCOUNT_NOT_FOUND = "Store User Account not found";

@Controller()
export default class StoreUserAccountController {
	private StoreUserAccountRepository = getRepository(StoreUserAccount);

	@Get("/user/:userId/store/:storeId/account")
	async listStoreUserAccounts(
		@Req() request: Request,
		@Res() response: Response
	) {
		try {
			const { userId, storeId } = request.params as any;

			const storeUserAccount = await this.StoreUserAccountRepository.findOne({
				where: {
					user: {
						id: userId,
					},
					store: {
						id: storeId,
					},
				},
			});

			if (storeUserAccount === undefined) {
				return responseError404(response, STORE_USER_ACCOUNT_NOT_FOUND);
			}
			const { toStoreUserAccountResponse } = StoreUserAccountConvert();

			return toStoreUserAccountResponse(storeUserAccount);
		} catch (error) {
			responseError500(response, error);
		}
	}
}
