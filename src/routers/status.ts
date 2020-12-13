import { Router } from 'express';

const router = Router();

router.get('/status', (req, res) => {
    res.json({
        "message": "Operação realizada com sucesso",
        "code": 0
    });
});

export default router;