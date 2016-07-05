import mongoose from 'mongoose'

const MONGO_HOST = process.env.MONGO_URL || 'mongodb://127.0.0.1/shandyclub'

mongoose.connect(MONGO_HOST)

// use native promises
mongoose.Promise = global.Promise

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('db connected')
})
