import { responseError500, responseError404 } from './../utils/serviceResponse';
import { Request, Response } from 'express';
import { Controller, Get, Post, QueryParams, Req, Res } from 'routing-controllers';
import { DeepPartial, getRepository, getManager } from 'typeorm';
import { User } from '../models/user';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { filterKeys, removeKeys } from '../utils/controllerUtils';

const USER_NOT_FOUND = "User not found";
//const WRONG_PASSWORD = 'Password does not match';


@Controller()
export default class UserController {

    private userRepository = getRepository(User)

    @Get('/user')
    async listUsers(@QueryParams() query: any, @Res() response: Response) {

        try {
            const users = await this.userRepository.find({ loadEagerRelations: true })
            return users;
        } catch (error) {
            responseError500(error, response);
        }
    }

    @Get('/user/:id')
    async getUser(@Req() request: Request, @Res() response: Response) {

        const { id } = request.params;

        try {
            const user = await this.userRepository.findOne(id);

            if (user === undefined)
                return response.status(404).send(USER_NOT_FOUND);

            return user;
        } catch (error) {
            responseError500(error, response);
        }
    }

    @Post('/signin')
    async signIn(@Req() request: Request, @Res() response: Response) {

        const keysToRemove = ['id'];

        const userData: DeepPartial<User> =
            removeKeys(request.body, keysToRemove);

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