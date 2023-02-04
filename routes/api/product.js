import express from 'express';
const router = express.Router();
import podsCtrl from '../../controllers/pods.js';

router.post('/', podsCtrl.createPod);
router.get('/', podsCtrl.getPods);
router.get('/:id', podsCtrl.getPodById);
router.delete('/:id', podsCtrl.deletePod);

export default router