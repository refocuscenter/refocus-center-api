import { Router } from 'express';

const router = Router();

router.get('/status', (req, res) => {
    res.json({
        "message": "Conrado",
        "code": 0
    });
});

export default router;