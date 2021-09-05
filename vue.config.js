const BASE_URL = process.env.NODE_ENV === 'production' ? '/vuemall/' : '/'
module.exports = {
  publicPath: BASE_URL,
  // base: '/vuemall',
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  css: {
    extract: false
  }
}