import express from 'express'
import * as Pub from './pub'

const router = express.Router()

router.get('/', (req, res, next) => {

  res.send('🍺')

  next()

})

router.use(`/${Pub.name}`, Pub.routes)

export default router
