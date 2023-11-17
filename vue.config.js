const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: './docs',
  publicPath: 'https://klklgooa.github.io/MyPortfolio_vue/',
  transpileDependencies: true,
  lintOnSave:false
})
