const path = require('path')
const nodeExternals = require('webpack-node-externals')

const WebpackSourceMapSupport = require('webpack-source-map-support')
const WebpackMessages = require('webpack-messages')

module.exports = {
  devtool: 'source-map',
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    'index': './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    modules: [
      path.resolve(process.cwd(), 'node_modules'),
      path.resolve(process.cwd(), 'src'),
    ],
    extensions: [
      '.js',
      '.json'
    ]
  },

  stats: false,
  plugins: [
    new WebpackSourceMapSupport(),
    new WebpackMessages({
      name: 'server',
      logger: str => console.log(`>> ${str}`)
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}
