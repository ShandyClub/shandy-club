import co from 'co'
import * as Pub from './service'

export const read = (req, res, next) => {

  const id = req.params.id

  co(function* () {

    return yield Pub.read(id)

  }).then( pub => {

    res.json({ pub })

    return next()

  }, e => next(e) )

}
