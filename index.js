import app from './app.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 3001

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.log(error))