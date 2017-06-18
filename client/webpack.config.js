const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const nodeEnv = process.env.NODE_ENV || 'development'
const isProduction = nodeEnv === 'production'

const jsSourcePath = path.join(__dirname, './source/js')
const buildPath = path.join(__dirname, './dist')
const sourcePath = path.join(__dirname, './source')

// POSTCSS
const postcssBasePlugins = [
  require('postcss-modules-local-by-default'),
  require('postcss-import')({
    addDependencyTo: webpack
  }),
  require('postcss-cssnext'),
  require('postcss-nested')
]
const postcssDevPlugins = []
const postcssProdPlugins = [
  require('cssnano')({
    safe: true,
    sourcemap: true,
    autoprefixer: false
  })
]

const postcssPlugins = postcssBasePlugins
  .concat(process.env.NODE_ENV === 'production' ? postcssProdPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? postcssDevPlugins : [])

// LOADERS
const loaders = {}

loaders.js = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: [
    'babel-loader'
  ]
}

loaders.css = {
  test: /\.(css|scss)$/,
  use: [
    {
      loader: 'style-loader'
    },
    {
      loader: 'css-loader',
      options: {
        localIdentName: '[hash:base64]',
        camelCase: true
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        plugins: postcssPlugins,
        importLoaders: 1
      }
    },
    {
      loader: 'sass-loader'
    }
  ],
  exclude: /node_modules/
}

//
// loaders.ttfeot = {
//     test: /\.(ttf|eot)$/i,
//     use: [{
//         loader: 'file-loader',
//         options: {
//             hash: 'sha512',
//             digest: 'hex',
//             name: 'fonts/[name].[ext]?[hash]'
//         }
//     }]
// };
//
// loaders.woff = {
//     test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
//     use: [{
//         loader: 'url-loader',
//         options: {
//             limit: 10000,
//             minetype: 'application/font-woff',
//             name: 'fonts/[name].[ext]?[hash]'
//         }
//     }]
// };
//
loaders.image = {
  test: /\.(jpe?g|png|gif)$/i,
  use: [{
    loader: 'file-loader',
    options: {
      hash: 'sha512',
      digest: 'hex',
      name: 'images/[name]-[hash].[ext]'
    }
  }]
}

// PLUGINS

const sourceMap = process.env.TEST || !isProduction
  ? [new webpack.SourceMapDevToolPlugin({ filename: null, test: /\.jsx?$/ })]
  : []

const basePlugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
    filename: 'vendor-[hash].js'
  }),
  new webpack.DefinePlugin({
    'process.env': {
      __DEV__: process.env.NODE_ENV !== 'production',
      NODE_ENV: JSON.stringify(nodeEnv)
    }
  }),
  new HtmlWebpackPlugin({
    template: path.join(sourcePath, 'index.html'),
    path: buildPath,
    filename: 'index.html'
  }),
  new webpack.NamedModulesPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
].concat(sourceMap)

const devPlugins = [
  new webpack.HotModuleReplacementPlugin()
]

const prodPlugins = [
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      screw_ie8: true,
      conditionals: true,
      unused: true,
      comparisons: true,
      sequences: true,
      dead_code: true,
      evaluate: true,
      if_return: true,
      join_vars: true
    },
    output: {
      comments: false
    }
  })
]

const plugins = basePlugins.concat(isProduction ? prodPlugins : devPlugins)

module.exports = {
  devtool: isProduction ? 'source-map' : 'inline-source-map',
  context: jsSourcePath,
  entry: {
    js: './index.jsx',
    vendor: [
      'babel-polyfill',
      'isomorphic-fetch',
      'react-dom',
      'react-redux',
      'react-router',
      'react',
      'redux-thunk',
      'redux'
    ]
  },
  output: {
    path: buildPath,
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      loaders.js,
      loaders.image,
      loaders.css,
      //loaders.ttfeot,
      //loaders.woff
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      jsSourcePath
    ],
    extensions: [
      '.jsx',
      '.js',
      '.json',
      '.css'
    ]
  },
  plugins,
  devServer: {
    contentBase: isProduction ? './build' : './source',
    historyApiFallback: true,
    port: 3000,
    compress: isProduction,
    inline: !isProduction,
    hot: !isProduction,
    host: '0.0.0.0',
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m'
      }
    }
  }
}
