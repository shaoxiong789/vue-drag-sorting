var config = require('./webpack.config.js')

config.entry = {
  'vue-drag': './src/main.js',
}

config.output = {
  filename: './dist/[name].js',
  library: 'VueDrag',
  libraryTarget: 'umd'
}
config.plugins = []

module.exports = config
