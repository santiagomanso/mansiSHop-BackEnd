//import (NOT ESM) express and products array
const express = require('express')
const products = require('./data/products')
const dotenv = require('dotenv')

dotenv.config()

//create server
const app = express()

//primitive routes
//  get all products
app.get('/api/products', (req, res) => {
  res.json(products)
})

// get ONE PRODUCT by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

//define PORT
const PORT = process.env.PORT || 5000

//stand by
app.listen(
  PORT,
  console.log(`Server Running in ${process.env.NODE_ENV} mode on port: ${PORT}`)
)
