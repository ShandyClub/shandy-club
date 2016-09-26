import mongoose from 'mongoose'
import random from 'mongoose-simple-random'

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
    type: { type: String, default: 'Point' },
    coordinates: { type: [Number], required: true }
  },
  created_at: Date,
  updated_at: Date
})

// create geoJSON index
Pub.index({ loc: '2dsphere' })

// use `random` plugin
Pub.plugin(random)

// pre save
Pub.pre('save', function(next) {

  const currentDate = new Date()

  this.updated_at = currentDate

  if (!this.created_at) this.created_at = currentDate

  next()

})

// pre find and update
Pub.pre('findOneAndUpdate', function(next) {

  this.update({}, { $set: { updated_at: new Date() }})

  next()

})

export default Pub
