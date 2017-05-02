import { Router } from 'express'

import HealthyRoute from './healthy.route'
import TileRoute from './tile.route'

const router = new Router()

router.use('/', HealthyRoute)
router.use('/', TileRoute)

export default router
