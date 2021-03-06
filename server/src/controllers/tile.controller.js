import Tile from '../models/tile.model.js'

export function getTiles (req, res) {
  Tile.find()
    .lean()
    .then(blueprints => res.json(blueprints))
    .catch(error => {
      console.error('Error:', error)
      res.json({error})
    })
}

export function getTile (req, res) {
  const tileID = req.params.tileID

  if (!tileID.match(/^[0-9a-fA-F]{24}$/)) {
    return res.json({
      message: 'id is malformed'
    })
  }

  if (!tileID.length) {
    return res.json({
      message: 'id is empty'
    })
  }

  Tile.find({_id: tileID})
    .then(tile => res.json(tile[0]))
    .catch(error => {
      console.error('Error:', error)
      res.json({error})
    })
}

export function createTile (req, res) {
  const newTile = new Tile({
    name: req.body.name,
    color: req.body.color
  })

  newTile.save()
  .then(tile => res.json(tile))
  .catch(error => {
    console.error('Error:', error)
    res.json({error})
  })
}

export function deleteTile (req, res) {
  const tileID = req.params.tileID

  if (!tileID.match(/^[0-9a-fA-F]{24}$/)) {
    return res.json({
      message: 'id is malformed'
    })
  }

  if (!tileID.length) {
    return res.json({
      message: 'id is empty'
    })
  }

  Tile.findOneAndRemove({_id: tileID})
  // does exist?
  .then(tile => {
    if (tile) return tile
    else throw new Error('tile not found')
  })
  .then(() => res.json({message: 'success'}))
  .catch(error => {
    console.error('Error:', error)
    res.json({error})
  })
}
