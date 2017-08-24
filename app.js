require('dotenv').config()

const htmlStandards = require('reshape-standard')
const jsStandards = require('spike-js-standards')
const DefinePlugin = require('webpack').DefinePlugin
const env = process.env.NODE_ENV

module.exports = {
  devtool: 'source-map',
  ignore: ['**/layout.html', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({
    minify: env === 'production'
  }),
  babel: jsStandards(),
  plugins: [
    new DefinePlugin({
      TENOR_API_KEY: JSON.stringify(process.env.TENOR_API_KEY),
      SQUARE_LOCATION_ID: JSON.stringify(process.env.SQUARE_LOCATION_ID),
      SQUARE_PERSONAL_ACCESS_TOKEN: JSON.stringify(process.env.SQUARE_PERSONAL_ACCESS_TOKEN),
    })
  ]
}
