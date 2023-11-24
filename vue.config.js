const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: './docs',
  publicPath: '/MyPortfolio_vue/',
  transpileDependencies: true,
  lintOnSave:false,
  configureWebpack: {
    resolve: {
      alias: {
        'echarts/lib/component/tooltip': 'echarts/lib/component/tooltip',
        'echarts/lib/component/title': 'echarts/lib/component/title',
      },
    },
  },


})
