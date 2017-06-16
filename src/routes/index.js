import { Router } from 'express'

import HealthyRoute from './healthy.route'
import TileRoute from './tile.route'
import DayRoute from './day.route'

const router = new Router()

router.use('/healthy', HealthyRoute)
router.use('/tiles', TileRoute)
router.use('/days', DayRoute)

export default router
