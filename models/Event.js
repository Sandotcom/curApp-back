import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true }
})

export default mongoose.model('Event', eventSchema);