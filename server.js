//import (NOT ESM) express and products array
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

//create server
const app = express()

//accept JSON data on BODY
app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use(notFound)
app.use(errorHandler)
//define PORT
const PORT = process.env.PORT || 5000

//stand by
app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode on port: ${PORT}`.yellow
      .bold
  )
)
