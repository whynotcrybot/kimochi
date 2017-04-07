import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

const app = express()
app.use(bodyParser.json())

mongoose.connect('mongodb://mongo/kimochi')

app.listen(8090, () => {
  console.log('Listening on 8090')
})
