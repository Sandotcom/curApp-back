import Event from "../models/event.js"
import Product from '../models/Product.js'
import Transaction from "../models/Transaction.js"

export const getEvent = async (req, res) => {
  const { id } = req.params

  try {
    const eventData = await Event.findById(id)

    if(!eventData) return res.status(400).json({ message: "Event not found" })
    
    return res.status(200).send(eventData)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

export const getEvents = async (req, res) => {
  try {
    const events = await Event.find()
    
    return res.status(200).send(events)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

export const newEvent = async (req, res) => {
  const { name, date } = req.body

  if(!name || !date) return res.status(400).json({ message: "Name and date are required." })

  try {
    const event = await Event.create({ name, date })

    return res.status(201).send(event)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

export const updateEvent = async (req, res) => {
  const { id } = req.params

  try {
    const eventToUpdate = await Event.findById(id)
    
    if(!eventToUpdate) return res.status(400).json({ message: "Event not found" })

    const updatedEvent = await Event.findByIdAndUpdate(id, {
      $set:req.body
    }, { new: true })

    return res.status(200).send(updatedEvent)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

export const deleteEvent = async (req, res) => {
  const { id } = req.params

  try {
    const eventToDelete = await Event.findById(id)

    if(!eventToDelete) return res.status(400).json({ message: "Event not found" })
    
    await Event.findByIdAndDelete(id)

    await Product.deleteMany({ eventId: id })

    await Transaction.deleteMany({ eventId: id })
    
    return res.status(200).json({ message: "Event has been deleted" })    
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}