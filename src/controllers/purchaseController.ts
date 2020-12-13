import { responseError500, responseError404 } from './../utils/serviceResponse';
import { Request, Response } from 'express';

import DigitalAccount from '../models/digitalAccount';

import { FindOptions } from 'sequelize';
import { checkInstance } from '../utils/sequelizeUtils';
import ProductsBasket from '../models/productsBasket';
import PurchasedBasket from '../models/purchasedBasket'

const PRODUCT_BASKET_NOT_FOUND = "Product Basket not found"
const DIGITAL_ACCOUNT_NOT_FOUND = "Digital Account not found"


export default class PurchaseController {

    static async purchase(request: Request, response: Response) {

        /*
        
        */

        try {
            const { idDigitalAccount, idProductsBasket } = request.params;

            const digitalAccount = await DigitalAccount.findByPk(idDigitalAccount);
            const productsBasket = await ProductsBasket.findByPk(idProductsBasket);

            if (!digitalAccount)
                return responseError404(response, DIGITAL_ACCOUNT_NOT_FOUND);

            if (!productsBasket)
                return responseError404(response, PRODUCT_BASKET_NOT_FOUND);

            //SUM

            /*
            idDigitalAccount!: string; //FK
    idProductsBasket!: number; //FK
    totalValue!: number;
            */

            /*const purchasedBasket = PurchasedBasket.create({
                idDigitalAccount: "",
                idProductsBasket: "",
                totalValue: await ProductsBasket.scope('sum').
            });*/



            response.json({
                "message": "Operação realizada com sucesso.",
                "code": 0,
                "authorization_id": 123456,
                "balance": {
                    "amount": 9999999,
                    "currency_code": 986
                }
            });
        } catch (error) {
            responseError500(error, response);
        }

    }
}