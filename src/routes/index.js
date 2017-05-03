import { Router } from 'express'

import HealthyRoute from './healthy.route'
import TileRoute from './tile.route'

const router = new Router()

router.use('/healthy', HealthyRoute)
router.use('/tiles', TileRoute)

export default router
