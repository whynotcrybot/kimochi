import { Router } from 'express'
import Tile from '../controllers/tile.controller'

const router = new Router()

router.get('/', Tile.getTiles)
router.get('/:tileID', Tile.getTile)
router.post('/', Tile.createTile)
router.delete('/:tileID', Tile.deleteTile)

export default router
