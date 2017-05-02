import express from 'express'
import Tile from '../controllers/tile.controller'

const router = express.Router()

router.get('/tiles', Tile.getTiles)
router.get('/tile/:tileID', Tile.getTile)
router.post('/tile', Tile.createTile)
router.delete('/tile/:tileID', Tile.deleteTile)

export default router