import express from 'express'
import * as controller from './controller'

const router = express.Router()

router.post( '/', controller.create, (req, res, next) => next() )
router.get( '/:id', controller.read, (req, res, next) => next() )
router.put( '/:id', controller.update, (req, res, next) => next() )
router.delete( '/:id', controller.remove, (req, res, next) => next() )

export default router
