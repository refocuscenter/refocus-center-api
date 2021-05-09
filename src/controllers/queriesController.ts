//import { responseError500, responseError404 } from './../utils/serviceResponse';
//import { Request, Response } from 'express';
//
//import DigitalAccount from '../models/digitalAccount';
//
//import { FindOptions, literal } from 'sequelize';
//import { checkInstance } from '../utils/sequelizeUtils';
//
//export default class QueriesController {
//    static async validateDigitalCard(request: Request, response: Response) {
//        try {
//            const { account_id } = request.body;
//
//            // const digitalAccount = await DigitalAccount.findByPk(account_id);
//
//            // if (!digitalAccount)
//            //     return response.status(404).json({
//            //         "message": "Número único de conta não encontrado.",
//            //         "code": 111
//            //       })
//
//            return response.json({
//                "message": "Operação realizada com sucesso.",
//                "code": 0,
//                "authorization_id": 165876,
//                "balance": {
//                    "amount": 0,
//                    "currency_code": 986
//                }
//            });
//        } catch (error) {
//            responseError500(error, response);
//        }
//    }
//}
