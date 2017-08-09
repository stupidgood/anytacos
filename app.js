require('dotenv').config()

const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const DefinePlugin = require('webpack').DefinePlugin
const env = process.env.NODE_ENV

module.exports = {
  devtool: 'source-map',
  ignore: ['**/layout.html', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({
    locals: (ctx) => { return { pageId: pageId(ctx), foo: 'bar' } },
    minify: env === 'production'
  }),
  postcss: cssStandards({
    minify: env === 'production',
    warnForDuplicates: env !== 'production'
  }),
  babel: jsStandards(),
  plugins: [
    new DefinePlugin({
      SQUARE_PERSONAL_ACCESS_TOKEN: JSON.stringify(process.env.SQUARE_PERSONAL_ACCESS_TOKEN),
      SQUARE_LOCATION_ID: JSON.stringify(process.env.SQUARE_LOCATION_ID),
      GIPHY_API_KEY: JSON.stringify(process.env.GIPHY_API_KEY)
    })
  ]
}
