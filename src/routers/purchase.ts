import { Router } from 'express';
import PurchaseController from '../controllers/purchaseController';

const router = Router();

router.post('/purchase', PurchaseController.purchase);

export default router