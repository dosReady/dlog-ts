import * as Router from 'koa-router'
import {mainCtrl} from './controller'

const router = new Router()

// Main Routes
router.get('/', mainCtrl.main)

export default router