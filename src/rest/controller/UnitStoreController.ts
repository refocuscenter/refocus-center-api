import { Request, Response } from "express";
import { Controller, Get, QueryParams, Req, Res } from "routing-controllers";
import {
	IUnitStoreRepository,
	UnitStoreRepository,
} from "../../data/repository/UnitStoreRepository";
import { UnitStoreConvert } from "../../presentation/convert/UnitStoreConvert";
import { responseError500 } from "../util/error";

const UNIT_STORE_NOT_FOUND = "UnitStore not found";

@Controller()
export default class UnitStoreController {
	private unitStoreRepository: IUnitStoreRepository = new UnitStoreRepository();

	@Get("/unit-store")
	async listUnitStores(@QueryParams() query: any, @Res() response: Response) {
		const { page = 0, limit = 10 } = query;

		try {
			const [unitStores, count] = await this.unitStoreRepository.findAndCount({
				page,
				limit,
			});

			const { toUnitStoresResponse } = UnitStoreConvert();

			return toUnitStoresResponse(unitStores, count);
		} catch (error) {
			responseError500(response, error);
		}
	}

	@Get("/unit-store/:id")
	async getUnitStore(@Req() request: Request, @Res() response: Response) {
		const { id } = request.params;

		try {
			const unitStore = await this.unitStoreRepository.findOne(id);

			if (unitStore === undefined) {
				return response.status(404).send(UNIT_STORE_NOT_FOUND);
			}

			const { toUnitStoreResponse } = UnitStoreConvert();

			return toUnitStoreResponse(unitStore);
		} catch (error) {
			responseError500(response, error);
		}
	}
}
