import { Request, Response } from "express";
import { Controller, Get, Req, Res } from "routing-controllers";
import {
	IStoreUserAccountRepository,
	StoreUserAccountRepository,
} from "../../data/repository/StoreUserAccountRepository";
import { StoreUserAccountConvert } from "../../presentation/convert/StoreUserAccountConvert";
import { responseError404, responseError500 } from "../util/error";

const STORE_USER_ACCOUNT_NOT_FOUND = "Store User Account not found";

@Controller()
export default class StoreUserAccountController {
	private storeUserAccountRepository: IStoreUserAccountRepository =
		new StoreUserAccountRepository();

	@Get("/user/:userId/store/:storeId/account")
	async listStoreUserAccounts(
		@Req() request: Request,
		@Res() response: Response
	) {
		try {
			const { userId, storeId } = request.params as any;

			const storeUserAccount = await this.storeUserAccountRepository.findOne(
				userId,
				storeId
			);

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
