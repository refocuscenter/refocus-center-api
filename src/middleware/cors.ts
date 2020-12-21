import { Router } from 'express';
import cors from 'cors';
import { corsConfig } from '../config/cors'

const router = Router();

let c = cors(corsConfig);
router.use(c);

export default router;