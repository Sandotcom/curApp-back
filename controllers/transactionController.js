import createError from 'http-errors';
import catchAsync from '../middlewares/catchAsync.js'
import Transaction from '../models/Transaction.js'

export const getTransactions = async (req, res) => {
  const { eventId } = req.params

  try {
    const transactions = await Transaction.find({ eventId })

    if(transactions.length === 0) return res.status(400).json({ message: "Error retrieving information" })
    
    return res.status(200).send(transactions)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

export const newTransaction = async (req, res) => {
  const { eventId, paymentMethod, totalPrice, products } = req.body

  try {
    const transaction = await Transaction.create({ eventId, paymentMethod, totalPrice, products })

    return res.status(200).send(transaction)
  } catch (error) {
    return res.status(400).json({ message: error.message })    
  }
}

export const updateTransaction = async (req, res) => {
  const { id } = req.params

  try {
    const transactionToUpdate = await Transaction.findById(id)

    if(!transactionToUpdate) return res.status(400).json({ message: 'Transaction not found' })

    const updatedTransaction = await Transaction.findByIdAndUpdate(id, {
      $set:req.body
    }, { new: true })

    return res.status(200).send(updatedTransaction)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

export const deleteTransaction = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const transactionDeleted = await Transaction.findByIdAndDelete(id);

  if (!transactionDeleted) {
    throw new createError(400, `Transaction '${id}' not found`);
  }

  return res
    .status(200)
    .json({ message: `Transaction '${id}' has been deleted` });
});
