require('dotenv').config()

const devConfig = {
  MONGO_URL: process.env.MONGO_URL_DEV
}

const testConfig = {
  MONGO_URL: process.env.MONGO_URL_TEST
}

const prodConfig = {
  MONGO_URL: process.env.MONGO_URL_PROD
}

const defaultConfig = {
  PORT: process.env.PORT || 3000
}

function envConfig (env) {
  switch (env) {
    case 'development':
      return devConfig
    case 'test':
      return testConfig
    default:
      return prodConfig
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV)
}
