import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
   
    dateFrom: { type: Date },
    dateTo: { type: Date },
    totalPrice: { type: Number },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    pod: { type: mongoose.Schema.Types.ObjectId, ref: 'Pod', unique: false },
     
}, {
    timestamps: true
  });
  
  export default mongoose.model('Booking', bookingSchema);