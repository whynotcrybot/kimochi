import express from 'express'

const router = express.Router()

router.get('/healthy', (req, res) => {
  res.json({message: 'OK'})
})

export default router
