import express from 'express'

import './config/database'
import middlewares from './config/middlewares'
import constants from './config/constants'
import routes from './routes'

const app = express()
middlewares(app)

app.use('/', routes)

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
