import co from 'co'
import * as Search from './service'

export const geocode = (req, res, next) => {

  const { place } = req.params

  co(function* () {

    return yield Search.geocode(place)

  }).then( geocode => {

    res.json({ geocode })

    res.sendStatus(200)

    return next()

  }, e => next(e) )

}
