import Product from "../models/Product.js"

export const getProducts = async (req, res) => {
  const { eventId } = req.params

  try {
    const products = await Product.find({ eventId })

    if(!products) return res.status(400).json({ message: "Error retrieving information" })
    
    return res.status(200).send(products)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

export const newProducts = async (req, res) => {
  try {
    const products = await Product.insertMany(req.body)

    return res.status(200).send(products)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

export const updateProduct = async (req, res) => {
  const { id } = req.params

  try {
    const productToUpdate = await Product.findById(id)
    
    if(!productToUpdate) return res.status(400).json({ message: "Product not found" })

    const updatedProduct = await Product.findByIdAndUpdate(id, {
      $set:req.body
    }, { new: true })

    return res.status(200).send(updatedProduct)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

export const deleteProduct = async (req, res) => {
  const { id } = req.params

  try {
    const productToDelete = await Product.findById(id)

    if(!productToDelete) return res.status(400).json({ message: "Product not found" })
    
    await Product.findByIdAndDelete(id)
    return res.status(200).json({ message: "Product has been deleted" })    
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}