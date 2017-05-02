import express from 'express'
import Healthy from '../controllers/healthy.controller'

const router = express.Router()

router.get('/healthy', (req, res) => {
  res.json(Healthy.healthy())
})

export default router
