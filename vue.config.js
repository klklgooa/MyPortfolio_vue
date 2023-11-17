const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: './docs',
  publicPath: '/MyPortfolio_vue/',
  transpileDependencies: true,
  lintOnSave:false
})
