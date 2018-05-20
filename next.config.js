const withMDX = require('@zeit/next-mdx')()
module.exports = withMDX({
  pageExtensions: ['js', 'mdx'],
  exportPathMap: function(defaultPathMap) {
    const pathMap = Object.assign({}, defaultPathMap)
    delete pathMap['/index']
    return pathMap
  }
})
