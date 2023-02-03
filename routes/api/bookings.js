import express from 'express';
const router = express.Router();
import bookingsCtrl from '../../controllers/bookings.js';

/---------- Protected Routes ----------/
router.post('/', bookingsCtrl.createBooking);
router.put('/:id', bookingsCtrl.editBooking);
router.delete('/:id', bookingsCtrl.deleteBooking);

export default router;