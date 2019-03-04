const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          mangle: {
            keep_fnames: true,
          },
        },
      })
    ],
  },
  plugins: [
    new OptimizeCssAssetsPlugin(),
    new CompressionPlugin(
      { 
        compressionOptions: { level: 1 },
        minRatio: 0.8,
        include: /\/js/,
        test: /\.js(\?.*)?$/i
      }
    )
  ],
}