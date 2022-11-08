import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
  eventId: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  products: [{ 
    _id: { type: String, required: true }, 
    name: { type: String, required: true }, 
    qty: { type: Number, required: true }
  }]
})

export default mongoose.model('Transaction', transactionSchema)