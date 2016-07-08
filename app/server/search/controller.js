import * as Search from './service'

export const geocode = (req, res, next) => {

  const place = req.params.place

  // TODO - promise this
  Search.geocode(place)

  res.sendStatus(200)

  return next()

}
