const path = require('path')
const BASE_DIR = __dirname.replace('/utils', '')

module.exports.JS_DIR = path.resolve(BASE_DIR, 'src')
module.exports.STYLE_DIR = path.resolve(BASE_DIR, 'styles')
module.exports.TEMPLATE_DIR = path.resolve(BASE_DIR, 'templates')
module.exports.DIST_DIR = path.resolve(BASE_DIR, 'dist')
