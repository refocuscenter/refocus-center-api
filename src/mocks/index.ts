import DigitalAccountPrepay from "../models/digitalAccount";
import Product from "../models/product";
import PurchasedBasket from "../models/purchasedBasket";
import Store from "../models/store";
import SuppliedProduct from "../models/suppliedProduct";
import User from "../models/user";
import ProductsBasket from "../models/productsBasket";
import {v4 as uuid} from "uuid";

const genUUID = [uuid(), uuid(), uuid(), uuid(), uuid()]

const users = [{
    "id": 1,
    "password": "s35ZjZ7z",
    "login": "King vulture",
    "email": "dthaxton0@i2i.jp",
    "fullName": "Dev Thaxton"
  }, {
    "id": 2,
    "password": "WVkrA8jkXeVe",
    "login": "Mongoose, banded",
    "email": "lcorringham1@cnbc.com",
    "fullName": "Lindsey Corringham"
  }, {
    "id": 3,
    "password": "lkvujSwW",
    "login": "Crane, stanley",
    "email": "cjendas2@mapy.cz",
    "fullName": "Correna Jendas"
  }, {
    "id": 4,
    "password": "bZlQcGc54m",
    "login": "Onager",
    "email": "dluker3@cmu.edu",
    "fullName": "Derril Luker"
  }, {
    "id": 5,
    "password": "0Pc7hL",
    "login": "Roadrunner, greater",
    "email": "jmanzell4@dyndns.org",
    "fullName": "Jonah Manzell"
  }]

const suppliedProducts = [{
    "id": 1,
    "idStore": 1,
    "idProduct": 3,
    "productValue": 52.7,
    "value": 1,
    "idProductsBasket": 1
  }, {
    "id": 2,
    "idStore": 1,
    "idProduct": 1,
    "productValue": 7.59,
    "value": 85,
    "idProductsBasket": 2
  }, {
    "id": 3,
    "idStore": 1,
    "idProduct": 2,
    "productValue": 65.71,
    "value": 37,
    "idProductsBasket": 3
  }, {
    "id": 4,
    "idStore": 1,
    "idProduct": 2,
    "productValue": 88.44,
    "value": 24,
    "idProductsBasket": 4
  }, {
    "id": 5,
    "idStore": 1,
    "idProduct": 1,
    "productValue": 10.72,
    "value": 59,
    "idProductsBasket": 5
  }]

const products = [{
    "id": 1,
    "barCode": "8389433835397",
    "name": "Secured",
    "description": "Phasellus in felis.",
    "image": "http://dummyimage.com/218x222.png/dddddd/000000"
  }, {
    "id": 2,
    "barCode": "5779484179181",
    "name": "asynchronous",
    "description": "Aenean lectus. ",
    "image": "http://dummyimage.com/250x145.png/cc0000/ffffff"
  }, {
    "id": 3,
    "barCode": "1033750307927",
    "name": "model",
    "description": "Proin eu mi. Nulla ac enim. ",
    "image": "http://dummyimage.com/108x185.bmp/5fa2dd/ffffff"
  }, {
    "id": 4,
    "barCode": "1554536812547",
    "name": "24/7",
    "description": "Morbi porttitor lorem id ligula. ",
    "image": "http://dummyimage.com/122x231.bmp/cc0000/ffffff"
  }, {
    "id": 5,
    "barCode": "3858537838269",
    "name": "tangible",
    "description": "Maecenas ut massa quis augue luctus tincidunt.",
    "image": "http://dummyimage.com/181x135.jpg/cc0000/ffffff"
  }];

const stores = [{
    "id": 1,
    "cnpj": "8371",
    "name": "InVivo Therapeutics Holdings Corp."
  }, {
    "id": 2,
    "cnpj": "42",
    "name": "Eagle Point Credit Company Inc."
  }, {
    "id": 3,
    "cnpj": "60060",
    "name": "Legg Mason Low Volatility High Dividend ETF"
  }, {
    "id": 4,
    "cnpj": "38",
    "name": "Lions Gate Entertainment Corporation"
  }, {
    "id": 5,
    "cnpj": "7955",
    "name": "John Hancock Tax Advantaged Dividend Income Fund"
  }]

const productsBaskets = [{
    "id": 1,
    "amount": 55,
    "userId": 1
  }, {
    "id": 2,
    "amount": 71,
    "userId": 2
  }, {
    "id": 3,
    "amount": 27,
    "userId": 3
  }, {
    "id": 4,
    "amount": 69,
    "userId": 4
  }, {
    "id": 5,
    "amount": 82,
    "userId": 5
  }];

const purchasedBaskets = [{
    "id": 1,
    "totalValue": 54.93,
    "idDigitalAccount": genUUID[0],
    "idProductsBasket": 1
  }, {
    "id": 2,
    "totalValue": 94.06,
    "idDigitalAccount": genUUID[1],
    "idProductsBasket": 2
  }, {
    "id": 3,
    "totalValue": 78.02,
    "idDigitalAccount": genUUID[2],
    "idProductsBasket": 3
  }, {
    "id": 4,
    "totalValue": 50.42,
    "idDigitalAccount": genUUID[3],
    "idProductsBasket": 4
  }, {
    "id": 5,
    "totalValue": 49.43,
    "idDigitalAccount": genUUID[4],
    "idProductsBasket": 5
}]

const digitalAccounts = [{
    "id": genUUID[0],
    "balance": 62.08,
    "userId": 1,
    "idStore": 1
  }, {
    "id": genUUID[1],
    "balance": 90.67,
    "userId": 2,
    "idStore": 1
  }, {
    "id": genUUID[2],
    "balance": 90.49,
    "userId": 3,
    "idStore": 1
  }, {
    "id": genUUID[3],
    "balance": 57.35,
    "userId": 4,
    "idStore": 1
  }, {
    "id": genUUID[4],
    "balance": 17.08,
    "userId": 5,
    "idStore": 1
  }];


export async function startMocks() {
    await User.bulkCreate(users);
    await Product.bulkCreate(products);
    await Store.bulkCreate(stores);
    await DigitalAccountPrepay.bulkCreate(digitalAccounts);
    await ProductsBasket.bulkCreate(productsBaskets);
    await SuppliedProduct.bulkCreate(suppliedProducts);    
    await PurchasedBasket.bulkCreate(purchasedBaskets);
    
}