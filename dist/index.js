
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./awsts.cjs.production.min.js')
} else {
  module.exports = require('./awsts.cjs.development.js')
}