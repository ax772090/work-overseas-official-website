const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')
// const UglifyjsWebpackPlugin = require('webpack').UglifyJsPlugin
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const needGzip = process.env.NODE_ENV === 'production' && process.env.VUE_APP_BASE_URL !== '/falcon-controller/'

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    host: '0.0.0.0',
    port: 8888,
    // open: true,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:2019',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    // overlay: {
    //   warnings: true,
    //   errors: true,
    //   lintOnSave: process.env.NODE_ENV !== 'production'
    // },
    before: app => {
      // app.get('/api/seller', (req, res) => {
      //   res.json({
      //     errno: 0,
      //     data: seller
      //   })
      // })
    }
  },

  css: {
    extract: true,
    sourceMap: false,
    modules: false,
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            rootValue: 100,
            exclude: /(node_module)/,
            mediaQuery: false,
            minPixelValue: 3
          })
        ]
      },
      sass: {
        data: `
          @import "@/assets/styles/variables.scss";
          @import "@/assets/styles/mixin.scss";
        `
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true
      })
      .end()
  },
  // chainWebpack: config => {
  //   const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
  //   types.forEach(type => addStyleResource(config.module.rule('sass').oneOf(type)))
  //   config.module
  //     .rule('images')
  //     .use('url-loader')
  //     .loader('url-loader')
  //     .tap(options => Object.assign(options, {
  //       limit: 10240
  //     }))
  // },

  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // config.externals = {
      //   'vue': 'Vue',
      //   'vue-router': 'VueRouter',
      //   'moment': 'moment'
      // }
      config.plugins.push(
        new UglifyjsWebpackPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_debugger: true,
              drop_console: true
            }
          },
          sourceMap: false,
          parallel: true
        })
      )
      if (needGzip) {
        const plugins = []
        plugins.push(
          new CompressionWebpackPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.css$|\.ttf$|\.html$|\.svg$|\.json$|\.js$/,
            threshold: 10240, // 只有大小大于该值的资源会被处理
            minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
            deleteOriginalAssets: false // 删除原文件
          })
        )
        config.plugins = [
          ...config.plugins,
          ...plugins
        ]
      }
    } else {
      if (process.env.VUE_APP_ANALYZE === 'analyze') {
        config.plugins.push(
          new BundleAnalyzerPlugin(
          //   {
          //   analyzerMode: 'server',
          //   analyzerHost: '127.0.0.1',
          //   analyzerPort: 8880, // 运行后的端口号
          //   reportFilename: 'report.html',
          //   defaultSizes: 'parsed',
          //   openAnalyzer: true,
          //   generateStatsFile: false,
          //   statsFilename: 'stats.json',
          //   statsOptions: null,
          //   logLevel: 'info'
          // }
          )
        )
      }
    }
  },
  // 第三方插件的选项
  pluginOptions: {

  }
}
