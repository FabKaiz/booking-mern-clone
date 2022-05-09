import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
const app = express()
dotenv.config()

const PORT = process.env.PORT || 8800

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
    console.log('connected to mongoDB');
  } catch (error) {
    throw error
  }
}

mongoose.connection.on('disconnect', () => console.log('mongoDB disconnected'))
mongoose.connection.on('connected', () => console.log('mongoDB connected'))

app.get('/', (req, res) => {
  res.send('first request')
})

app.listen(8800, () => {
  connect()
  console.log(`Application listening on port ${PORT}`)
})
