import { Router } from 'express'
import Healthy from '../controllers/healthy.controller'

const router = new Router()

router.get('/healthy', Healthy.healthy)

export default router
