import mongoose from "mongoose";

const podSchema = new mongoose.Schema({
    podId: { type: String, required: true, unique: true },
    podNumber: { type: Number, required: true },
    price: { type: Number, required: true },
}, {
    timestamps: true
  });
  
  export default mongoose.model('Pod', podSchema);