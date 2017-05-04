import { Router } from 'express'
import * as Day from '../controllers/day.controller'

const router = new Router()

router.get('/', Day.getDays)
router.get('/:date', Day.getDay)
router.post('/', Day.createDay)
router.delete('/:date', Day.deleteDay)

export default router
