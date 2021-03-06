const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  output: {
    path: resolve(__dirname, 'docs'),
    publicPath: '/covid19-dashboard/'
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        react: {
          test: /node_modules\/react/,
          name: 'react',
          chunks: 'all',
          reuseExistingChunk: true
        },
        highcharts: {
          test: /node_modules\/highcharts/,
          name: 'highcharts',
          chunks: 'all',
          reuseExistingChunk: true
        }
      }
    }
  },

  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ]
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      excludeAssets: [/hc-/, /styles/],
      favicon: 'src/favicon.ico',
      hash: false
    }),
    new HtmlWebpackExcludeAssetsPlugin(),
    new MiniCssExtractPlugin()
  ]
};
