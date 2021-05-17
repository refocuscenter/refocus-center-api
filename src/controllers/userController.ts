import { Request, Response } from "express";
import {
	Controller,
	Get,
	Post,
	QueryParams,
	Req,
	Res,
} from "routing-controllers";
import { DeepPartial, getRepository } from "typeorm";
import { User } from "../models/user";
import { responseError500 } from "../utils/serviceResponse";
import { UserConvert } from "./convert/UserConvert";

const USER_NOT_FOUND = "User not found";
//const WRONG_PASSWORD = 'Password does not match';

@Controller()
export default class UserController {
	private userRepository = getRepository(User);

	@Get("/user")
	async listUsers(@QueryParams() query: any, @Res() response: Response) {
		const { page = 0, limit = 10 } = query;

		try {
			const [users, count] = await this.userRepository.findAndCount({
				loadEagerRelations: true,
				take: limit,
				skip: page * limit,
			});

			const { toUsersResponse } = UserConvert();

			return toUsersResponse(users, count);
		} catch (error) {
			responseError500(error, response);
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
			responseError500(error, response);
		}
	}

	@Post("/signin")
	async signIn(@Req() request: Request, @Res() response: Response) {
		const userData: DeepPartial<User> = request.body;

		console.log(userData);

		const newUser = await this.userRepository.create(userData);

		await this.userRepository.save(newUser, { transaction: true });

		return newUser;
	}

	/*async login(request: Request, response: Response) {

        try {
            const { login, password } = request.body;

            if (login === undefined)
                return response.status(400).send(UNDEFINED_ACCOUNT);

            const queryOptions: FindOptions<User> = { where: { login: login } }

            const user = await User.scope('login').findOne(queryOptions);

            if (!user)
                return responseError404(response, USER_NOT_FOUND);

            const passIsEquals = password === user.password;

            if (!passIsEquals)
                return response.status(401).send(WRONG_PASSWORD);

            response.send(user);
        } catch (error) {
            responseError500(error, response);
        }

    }*/
}
