import express from 'express'
import * as Pub from './pub'
import * as Search from './search'

const router = express.Router()

router.get('/', (req, res, next) => {

  res.send('🍺')

  next()

})

router.use(`/${Pub.name}`, Pub.routes)
router.use(`/${Search.name}`, Search.routes)

export default router
