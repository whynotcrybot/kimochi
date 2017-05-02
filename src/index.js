import express from 'express'
import bodyParser from 'body-parser'

import './config/database'
import constants from './config/constants'

import Healthy from './routes/healthy.route'
import Tile from './routes/tile.route'

const app = express()
app.use(bodyParser.json())

app.use('/', Healthy)
app.use('/', Tile)

// http://www.marcusoft.net/2015/10/eaddrinuse-when-watching-tests-with-mocha-and-supertest.html
if (!module.parent) {
  app.listen(constants.PORT, err => {
    if (err) console.error('Error occured')
    else {
      console.log(
        `
          Listening on port: ${constants.PORT}
          Environment: ${process.env.NODE_ENV}
        `,
      )
    }
  })
}

export default app
