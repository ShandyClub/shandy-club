import express from 'express'
import * as controller from './controller'

const router = express.Router()

// TODO - can potentially remove verbs from URI and dictate via client request eg. POST || DELETE etc
// router.post( '/create', controller.create, (req, res, next) => next() )
router.get( '/:id', controller.read, (req, res, next) => next() )
// router.put( '/update/:id', controller.update, (req, res, next) => next() )
// router.delete( '/delete/:id', controller.remove, (req, res, next) => next() )

export default router
