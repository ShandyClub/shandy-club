import co from 'co'
import uuid from 'node-uuid'
import * as Pub from './service'

export const create = (req, res, next) => {

  const id = uuid.v4()

  co(function* () {

    return yield Pub.create(id, req.body)

  }).then( pub => {

    res.json({ pub })

    res.sendStatus(200)

    return next()

  }, e => next(e) )

}

export const read = (req, res, next) => {

  const id = req.params.id

  co(function* () {

    return yield Pub.read(id)

  }).then( pub => {

    res.json({ pub })

    return next()

  }, e => next(e) )

}

export const update = (req, res, next) => {

  const id = req.params.id

  co(function* () {

    return yield Pub.update(id, req.body)

  }).then( pub => {

    res.json({ pub })

    return next()

  }, e => next(e) )

}

export const remove = (req, res, next) => {

  const id = req.params.id

  co(function* () {

    return yield Pub.remove(id)

  }).then( () => {

    res.sendStatus(200)

    return next()

  }, e => next(e) )

}
