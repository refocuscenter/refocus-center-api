import { Request, Response } from "express";
import { Controller, Get, QueryParams, Req, Res } from "routing-controllers";
import {
	IUserRepository,
	UserRepository,
} from "../../data/repository/UserRepository";
import { UserConvert } from "../../presentation/convert/UserConvert";
import { responseError500 } from "../util/error";

const USER_NOT_FOUND = "User not found";

@Controller()
export default class UserController {
	private userRepository: IUserRepository = new UserRepository();

	@Get("/user")
	async listUsers(@QueryParams() query: any, @Res() response: Response) {
		const { page = 0, limit = 10 } = query;

		try {
			const [users, count] = await this.userRepository.findAndCount({
				page,
				limit,
			});

			const { toUsersResponse } = UserConvert();

			return toUsersResponse(users, count);
		} catch (error) {
			responseError500(response, error);
		}
	}

	@Get("/user/:id")
	async getUser(@Req() request: Request, @Res() response: Response) {
		const { id } = request.params;

		try {
			const user = await this.userRepository.findOne(id);

			if (user === undefined) {
				return response.status(404).send(USER_NOT_FOUND);
			}

			const { toUserResponse } = UserConvert();

			return toUserResponse(user);
		} catch (error) {
			responseError500(response, error);
		}
	}
}
