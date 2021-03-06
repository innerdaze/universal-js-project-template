var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'client', 'index.jsx')
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist', 'web'),
    publicPath: '/'
  },
  resolve: {
    alias: {
      css: path.resolve(__dirname, 'client', 'assets', 'css')
    },
    extensions: ['.js', '.jsx', '.json', '.css', '.scss']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'client', 'templates', 'index.ejs'),
      filename: 'index.html'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: process.env.NODE_ENV === 'production'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: /client/,
        use: ['react-hot-loader/webpack', {
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react']
          }
        }]
      },
      {
        test: /\.css$/,
        include: /client\/assets\/css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: true,
              modules: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                './node_modules'
              // - UNCOMMENT the line below if using grommet
              //  './node_modules/grommet/scss'
              ]
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        include: /client\/assets\/fonts/,
        loader: 'file-loader?name=client/assets/fonts/[name].[ext]'
      }
    ]
  }
}
