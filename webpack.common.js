const { resolve } = require('path');

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
        }
      }
    }
  },

  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ]
  }
};
