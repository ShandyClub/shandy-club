import co from 'co'
import * as Search from './service'
import { service as Pub } from '../pub'

export const geocode = (req, res, next) => {

  const { place } = req.params

  co(function* () {

    return yield Search.geocode(place)

  }).then( geocode => {

    res.status(200).json({ geocode })

    return next()

  }, e => next(e) )

}

export const pubs = (req, res, next) => {

  const { point, features, maxDistance } = req.body

  co(function* () {

    return yield Pub.search(point, features, maxDistance)

  }).then( pubs => {

    res.status(200).json({ pubs })

    return next()

  }, e => next(e) )

}

export const lucky = (req, res, next) => {

  const { lng, lat } = req.body

  co(function* () {

    return yield Pub.lucky([ lng, lat ])

  }).then( pubs => {

    res.status(200).json({ pubs })

    return next()

  }, e => next(e) )

}
