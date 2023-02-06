import express from "express";
const router = express.Router();
import bookingsCtrl from "../../controllers/bookings.js";

/---------- Protected Routes ----------/;
router.post("/", bookingsCtrl.createBooking);
router.get("/", bookingsCtrl.getBookings);
router.get("/:id", bookingsCtrl.getBookingById);
router.delete("/:id", bookingsCtrl.cancelBooking);
router.put("/:id", bookingsCtrl.updateBooking);
export default router;
