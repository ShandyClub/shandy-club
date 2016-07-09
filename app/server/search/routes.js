import express from 'express'
import * as controller from './controller'

const router = express.Router()

router.get( '/geocode/:place', controller.geocode, (req, res, next) => next() )
router.post( '/pubs', controller.pubs, (req, res, next) => next() )
router.post( '/lucky', controller.lucky, (req, res, next) => next() )

export default router
