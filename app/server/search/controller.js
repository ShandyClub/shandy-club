import * as Search from './service'

export const geocode = (req, res, next) => {

  console.log('geocode place:', req.params.place)

  res.sendStatus(200)

  return next()

}
