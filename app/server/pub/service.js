import mongoose from 'mongoose'

import schema from './model'
import { collection } from './constants'

const Pub = mongoose.model(collection, schema)

export const create = (id, props) => {

  return Pub.create({ id, ...props })

}

export const read = (id) => {

  return Pub.findOne({ id })

}

export const update = (id, props) => {

  return Pub.findOneAndUpdate({ id }, { ...props }, { new: true })

}

export const remove = (id) => {

  return Pub.remove({ id })

}
