import Booking from "../models/booking.js";

const createBooking = async (req, res) => {
try {
const booking = new Booking({ ...req.body });
await booking.save();
res.status(201).json({ booking });
} catch (error) {
res.status(400).json({ error: error.message });
}
};

const getBookings = async (req, res) => {
try {
const bookings = await Booking.find({});
res.json({ bookings });
} catch (error) {
res.status(400).json({ error: error.message });
}
};

const getBookingById = async (req, res) => {
try {
const booking = await Booking.findById(req.params.id);
if (!booking) return res.status(404).json({ error: 'Booking not found' });
res.json({ booking });
} catch (error) {
res.status(400).json({ error: error.message });
}
};

const cancelBooking = async (req, res) => {
try {
const booking = await Booking.findOneAndDelete({ _id: req.params.id });
if (!booking) return res.status(401).json({ error: 'Booking not found' });
res.json({ message: 'Booking successfully cancelled', booking });
} catch (error) {
res.status(400).json({ error: error.message });
}
};

const updateBooking = async (req, res) => {
    try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    });
    if (!booking)
    return res.status(404).json({ error: "Booking not found" });
    res.json({ message: "Booking successfully updated", booking });
    } catch (error) {
    res.status(400).json({ error: error.message });
    }
    };
    
    export default {
    createBooking,
    getBookings,
    getBookingById,
    cancelBooking,
    updateBooking,
    };
    
    
    
    