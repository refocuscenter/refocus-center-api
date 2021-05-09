//import { responseError500, responseError404 } from './../utils/serviceResponse';
//import { Request, Response } from 'express';
//
//import DigitalAccount from '../models/digitalAccount';
//
//import { FindOptions, literal } from 'sequelize';
//import { checkInstance } from '../utils/sequelizeUtils';
//import ProductsBasket from '../models/productsBasket';
//import PurchasedBasket from '../models/purchasedBasket'
//
//const PRODUCT_BASKET_NOT_FOUND = "Product Basket not found"
//const DIGITAL_ACCOUNT_NOT_FOUND = "Digital Account not found"
//
//
//export default class PurchaseController {
//
//    static async buyBasket(request: Request, response: Response) {
//
//        /*
//
//        */
//        const { account_id } = request.body;
//
//        try {
//            const { idProductsBasket } = request.params;
//
//            const digitalAccount = await DigitalAccount.findByPk(account_id);
//            const productsBasket = await ProductsBasket.findByPk(idProductsBasket);
//
//            if (!digitalAccount)
//                return responseError404(response, DIGITAL_ACCOUNT_NOT_FOUND);
//
//            if (!productsBasket)
//                return responseError404(response, PRODUCT_BASKET_NOT_FOUND);
//
//            const purchasedBasket = await PurchasedBasket.create({
//                idDigitalAccount: account_id,
//                idProductsBasket: idProductsBasket,
//                totalValue: await ProductsBasket.findAll({ attributes: [[literal('SUM(amount * value)'), "total"]] })
//            });
//
//            const newDigitalAccount = await digitalAccount.update({ balance: digitalAccount.balance - purchasedBasket.totalValue })
//
//            if (newDigitalAccount.balance < 0)
//                response.status(400).json({
//                    "message": "Saldo insuficiente.",
//                    "balance": {
//                        "amount": digitalAccount.balance,
//                        "currency_code": 986
//                    },
//                    "code": 530
//                });
//
//            response.json({
//                "message": "Operação realizada com sucesso.",
//                "code": 0,
//                "authorization_id": 123456,
//                "balance": {
//                    "amount": newDigitalAccount.balance,
//                    "currency_code": 986
//                }
//            });
//        } catch (error) {
//            responseError500(error, response);
//        }
//
//    }
//
//    static async purchase(request: Request, response: Response) {
//
//        try {
//            const { purchase_id, account_id, psProductCode, card, total_amount } = request.body;
//            //const { paysmart_id, issuer_id, pan, panseq } = card;
//
//            const { amount, currency_code } = total_amount;
//
//            const digitalAccount = await DigitalAccount.findByPk(account_id);
//
//            if (!digitalAccount)
//                return response.status(404).json({
//                    "message": "Número único de conta não encontrado.",
//                    "code": 111
//                  })
//
//            //[Validar cartão]
//
//            digitalAccount.balance -= amount;
//
//            if (digitalAccount.balance < 0)
//                return response.status(400).json({
//                    "message": "Saldo insuficiente.",
//                    "balance": {
//                        "amount": digitalAccount.balance,
//                        "currency_code": 986
//                    },
//                    "code": 530
//                });
//
//            const newDigitalAccount = await digitalAccount.save();
//
//            response.json({
//                "message": "Operação realizada com sucesso.",
//                "code": 0,
//                "authorization_id": 123456,
//                "balance": {
//                    "amount": newDigitalAccount.balance,
//                    "currency_code": 986
//                }
//            });
//        } catch (error) {
//            responseError500(error, response);
//        }
//
//    }
//}
