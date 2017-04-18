import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import Healthy from './routes/healthy.route'
import Tile from './routes/tile.route'

const app = express()
app.use(bodyParser.json())

app.use('/', Healthy)
app.use('/', Tile)

mongoose.connect('mongodb://mongo/kimochi')

app.listen(8090, () => {
  console.log('Listening on 8090')
})
