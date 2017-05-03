import { Router } from 'express'
import Healthy from '../controllers/healthy.controller'

const router = new Router()

router.get('/', Healthy.healthy)

export default router
