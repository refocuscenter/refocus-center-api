import { Controller, Get } from "routing-controllers";

@Controller()
export default class StatusController {
	@Get("/status")
	async getStatus() {
		return {
			message: "Operação realizada com sucesso",
			code: 0,
		};
	}
}
