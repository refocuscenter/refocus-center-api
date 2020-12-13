import { Router } from 'express';
import QueriesController from '../controllers/queriesController';

const router = Router();

router.post('/queries', QueriesController.validateDigitalCard);

export default router;