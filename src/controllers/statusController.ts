import { Response } from "express";
import { Controller, Get, Res } from "routing-controllers";

@Controller()
export default class UserController {
	@Get("/status")
	async getStatus(@Res() response: Response) {
		return response.json({
			message: "Operação realizada com sucesso",
			code: 0,
		});
	}
}
