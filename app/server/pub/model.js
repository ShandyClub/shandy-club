import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Pub = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  created_at: Date,
  updated_at: Date
})

Pub.pre('save', function(next) {

  const currentDate = new Date()

  this.updated_at = currentDate

  if (!this.created_at) {
    this.created_at = currentDate
  }

  next()

})


Pub.pre('findOneAndUpdate', function(next) {

  this.update({}, { $set: { updated_at: new Date() }})

  next()

})

export default Pub
