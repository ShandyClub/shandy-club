import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Pub = new Schema({
  name: { type: String, required: true },
  address: String,
  postcode: String,
  website: String,
  cheers: Number,
  features: {
    architecture: Boolean,
    beer: Boolean,
    fire: Boolean,
    food: Boolean,
    games: Boolean,
    garden: Boolean,
    peace: Boolean,
    tv: Boolean
  },
  desc: String,
  loc: {
    type: String,
    coordinates: Array
  },
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
