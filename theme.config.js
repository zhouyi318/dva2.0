const fs = require('fs')
const path = require('path')
const lessToJs = require('less-vars-to-js')

module.exports = () => {
  /* 加载那套主题 */
  const themePath = path.resolve(__dirname, 'src/themes/default.less')
  return lessToJs(fs.readFileSync(themePath, 'utf8'))
}
