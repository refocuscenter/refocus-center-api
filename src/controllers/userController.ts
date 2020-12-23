import { responseError500, responseError404 } from './../utils/serviceResponse';
import { Request, Response } from 'express';
import { Controller, Get, JsonController, QueryParam, QueryParams, Req, Res } from 'routing-controllers';
//import User from '../models/user';
//import { FindOptions } from 'sequelize';
//import { checkInstance } from '../utils/sequelizeUtils';
//import DigitalAccountPrepay from '../models/digitalAccount';
//
//const USER_NOT_FOUND = "User not found";
//const UNDEFINED_ACCOUNT = 'Undefined account';
//const WRONG_PASSWORD = 'Password does not match';
//
//const sequelize = () => checkInstance(User.sequelize)
//

@JsonController()
export default class UserController {

    @Get('/users')
    async listUsers(@QueryParams() query: any) {

        try {
            //const usersList = await User.findAll({ include: { model: DigitalAccountPrepay } });
            return { message: "eaeee" }
        } catch (error) {
            //responseError500(error, response);
        }

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