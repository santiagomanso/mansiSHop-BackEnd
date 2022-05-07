//import (NOT ESM) express and products array
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

//create server
const app = express()

app.use('/api/products', productRoutes)
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
