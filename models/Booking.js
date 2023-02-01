import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    bookingId: { type: String, required: true, unique: true},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    podId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pod'},
    dateFrom: { type: Date, required: true },
    dateTo: { type: Date, required: true },
    totalPrice: { type: Number, required: true },
}, {
    timestamps: true
  });
  
  export default mongoose.model('Booking', bookingSchema);