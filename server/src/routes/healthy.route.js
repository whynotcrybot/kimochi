import { Router } from 'express'
import * as Healthy from '../controllers/healthy.controller'

const router = new Router()

router.get('/', Healthy.isHealthy)

export default router
