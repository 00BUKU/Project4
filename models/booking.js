import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
   
    dateFrom: { type: Date, get: (dateFrom) => dateFrom.toISOString().substr(0,10) },
    dateTo: { type: Date, get: (dateTo) => dateTo.toISOString().substr(0,10) },
    totalPrice: { type: Number },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    pod: { type: mongoose.Schema.Types.ObjectId, ref: 'Pod', unique: false },
     
}, {
    timestamps: true,
    toObject: { getters: true },
    toJSON: { getters: true }
  });
  
  export default mongoose.model('Booking', bookingSchema);