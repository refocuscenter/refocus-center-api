import { Request, Response } from "express";
import { Controller, Get, Req, Res } from "routing-controllers";
import {
	FinancialAccountRepository,
	IFinancialAccountRepository,
} from "../../data/repository/FinancialAccountRepository";
import { FinancialAccountConvert as FinancialAccountConvert } from "../../presentation/convert/FinancialAccountConvert";
import { responseError404, responseError500 } from "../util/error";

const FINANCIAL_ACCOUNT_NOT_FOUND = "Financial Account not found";

@Controller()
export default class FinancialAccountController {
	private financialAccountRepository: IFinancialAccountRepository =
		new FinancialAccountRepository();

	@Get("/user/:userId/store/:storeId/financial-account")
	async listFinancialAccounts(
		@Req() request: Request,
		@Res() response: Response
	) {
		try {
			const { userId, storeId } = request.params as any;

			const financialAccount = await this.financialAccountRepository.findOne(
				userId,
				storeId
			);

			if (financialAccount === undefined) {
				return responseError404(response, FINANCIAL_ACCOUNT_NOT_FOUND);
			}
			const { toFinancialAccountResponse } = FinancialAccountConvert();

			return toFinancialAccountResponse(financialAccount);
		} catch (error) {
			responseError500(response, error);
		}
	}
}
