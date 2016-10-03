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

export const search = (point, features, maxDistance) => {

  // query by selected features
  const query = features && Object.keys(features).reduce( (reduced, f) => features[f] ? { ...reduced, [`features.${f}`]: features[f] } : reduced, {} ) || {}

  // and location
  query['loc'] = { $near: { $geometry: { type: 'Point', coordinates: point }, $maxDistance: maxDistance } }

  return Pub.find(query).exec()

}

export const lucky = (point) => {

  const filter = {}

  if (point) filter['loc'] = { $near: { $geometry: { type: 'Point', coordinates: point } } }

  return new Promise( (resolve, reject) => {

    Pub.findRandom(filter, {}, { limit: 3 }, (err, pubs) => {

      return err ? reject(err) : resolve(pubs)

    })

  })

}
