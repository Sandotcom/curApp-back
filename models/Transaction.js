import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
  eventId: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  products: [{ id: String, qty: Number }]
})

const Transaction = mongoose.model('Transaction', transactionSchema)

export default Transaction