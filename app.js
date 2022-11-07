import express from 'express'
import routes from './routes/index.js'

const app = express()

app.use(express.json({ limit: '1mb' }))
app.use(express.urlencoded({ limit: '1mb', extended: true }))

app.use('/', routes)

export default app