import express from 'express'
import * as controller from './controller'

const router = express.Router()

router.get( '/geocode/:place', controller.geocode, (req, res, next) => next() )

export default router
