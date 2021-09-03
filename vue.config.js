// const BASE_URL = process.env.NODE_ENV === "production" ? "/vuemall/" : "/";
module.exports = {
  // publicPath: BASE_URL,
  configureWebpack: {
    resolve: {
      alias: {
        "assets": '@/assets',
        "common": '@/common',
        "components": '@/components',
        "views": '@/views',
        "network": '@/network',
      }
    }
  },
  css: {
    extract: false
  },
  devServer: {
    port: 2222, // 端口
  },
}