var postcss = require('postcss')

module.exports = postcss.plugin('my-plugin', opts => {
  opts = opts || {}

  return (root, result) => {
    console.log({ root })
  }
})
