import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log(`Mongo DB connected on: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log('error: ', error.message)
    process.exit(1)
  }
}

export default connectDB
