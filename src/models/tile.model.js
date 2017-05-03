import mongoose, { Schema } from 'mongoose'

const TileSchema = new Schema(
  {
    name: {type: String},
    color: {type: String},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  },
  {
    collection: 'tiles'
  }
)

let Tile

try {
  Tile = mongoose.model('Tile')
} catch (e) {
  Tile = mongoose.model('Tile', TileSchema)
}

export default Tile
