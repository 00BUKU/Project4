import mongoose from "mongoose";

const podSchema = new mongoose.Schema({
    podNumber: { type: Number, required: true },
    price: { type: Number, required: true },
}, {
    timestamps: true
  });

  export default mongoose.model("Pod", podSchema);