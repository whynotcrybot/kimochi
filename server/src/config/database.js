import mongoose from 'mongoose'
import constants from './constants'

mongoose.Promise = global.Promise
mongoose.set('debug', process.env.MONGOOSE_DEBUG)

try {
  mongoose.connect(constants.MONGO_URL)
} catch (err) {
  mongoose.createConnection(constants.MONGO_URL)
}

mongoose.connection
  .on('error', e => {
    throw e
  })
