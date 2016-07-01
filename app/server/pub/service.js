import mongoose from 'mongoose'

import schema from './model'
import { collection } from './constants'

const Pub = mongoose.model(collection, schema)

export const create = (id, props) => {

  // TODO
  return Promise.resolve(true)

  // return Pub.create({ id, ...props })

}

export const read = (id) => {

  // TODO
  return Promise.resolve({ name: 'apub' })

  // return Pub.findOne({ id })

}

export const update = (id, props) => {

  // TODO
  return Promise.resolve(true)

  // return Pub.findOneAndUpdate({ id }, { ...props }, { new: true })

}

export const remove = () => {

  // TODO
  return Promise.resolve(true)

}
