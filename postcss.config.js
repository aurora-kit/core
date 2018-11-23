module.exports = {
  plugins: [
    'postcss-import',
    'postcss-nested',
    'postcss-custom-media',
    'postcss-custom-properties',
    'postcss-calc',
    'postcss-discard-comments',
    'postcss-remove-root',
    'autoprefixer',
    'css-mqpacker',
    'postcss-reporter',
    './src/plugins/test',
  ].map(require),
}
