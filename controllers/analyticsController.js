import Transaction from "../models/Transaction.js";

export const getAnalytics = async (req, res) => {
  const { eventId } = req.params;

  try {
    const transactions = await Transaction.aggregate([
      { $match: { eventId } },
      {
        $group: { _id: "$paymentMethod", totalPrice: { $sum: "$totalPrice" }},
      },
    ]);

    return res.status(200).send(transactions);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
