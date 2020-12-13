import { responseError500, responseError404 } from './../utils/serviceResponse';
import { Request, Response } from 'express';

import DigitalAccount from '../models/digitalAccount';

import { FindOptions, literal } from 'sequelize';
import { checkInstance } from '../utils/sequelizeUtils';

export default class QueriesController {
    static async validateDigitalCard(request: Request, response: Response) {
        try {
            const { account_id } = request.body;

            return response.json({
                "message": "Operação realizada com sucesso.",
                "code": 0,
                "authorization_id": 165876,
                "balance": { 
                    "amount": (await DigitalAccount.findByPk(account_id))?.balance,
                    "currency_code": 986    
                }
            });
        } catch (error) {
            responseError500(error, response);
        }
    }
}