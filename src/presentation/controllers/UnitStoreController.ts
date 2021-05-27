import { Request, Response } from "express";
import { Controller, Get, QueryParams, Req, Res } from "routing-controllers";
import { getRepository } from "typeorm";
import { UnitStore } from "../../data/models/unitStore";
import { responseError500 } from "../../utils/serviceResponse";
import { UnitStoreConvert } from "../convert/UnitStoreConvert";

const UNIT_STORE_NOT_FOUND = "UnitStore not found";

@Controller()
export default class UnitStoreController {
	private unitStoreRepository = getRepository(UnitStore);

	@Get("/unit-store")
	async listUnitStores(@QueryParams() query: any, @Res() response: Response) {
		const { page = 0, limit = 10 } = query;

		try {
			const [unitStores, count] = await this.unitStoreRepository.findAndCount({
				loadEagerRelations: true,
				take: limit,
				skip: page * limit,
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
