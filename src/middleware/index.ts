import express, { Router, urlencoded } from 'express';
import dotenv from 'dotenv';
import cors from './cors';


//Init .env
dotenv.config();

const router = Router();

var bodyParser = require('body-parser');

// configure the app to use bodyParser()
router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());

router.use(cors);

export default router;