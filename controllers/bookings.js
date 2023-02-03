import Booking from '../models/booking';

export const createBooking = async (req, res) => {
    try {
        const booking = new Booking(req.body);
        await booking.save();
        res.status(201).json({ booking });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json({ bookings });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const cancelBooking = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndDelete(req.params.id);
        res.json({ message: 'Booking successfully cancelled', booking });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
