import { Response } from "express";
import { Controller, Get, Res } from "routing-controllers";

@Controller()
export default class StatusController {
	@Get("/status")
	async getStatus(@Res() response: Response) {
		return {
			message: "Operação realizada com sucesso",
			code: 0,
		};
	}
}
