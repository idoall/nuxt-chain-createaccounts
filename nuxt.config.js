export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-app-test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: 'https://mshk.top/wp-content/uploads/2017/08/logo_248248.png' },
      { rel: 'icon', type: 'image/x-icon', href: 'https://mshk.top/wp-content/uploads/2017/08/logo_248248-150x150.png' }
    ],
    script: [
      {src: 'https://hm.baidu.com/hm.js?f3bf6506a7fd54484864e940c8583aa3'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/bootstrap',
    '~/plugins/vue-clipboard2',
    '~/plugins/GenWeb3Address.js',
  ],

  bootstrapVue: {
    bootstrapCSS: false, // or `css`
    bootstrapVueCSS: false, // or `bvCSS`
    icons: true,
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-build-optimisations'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  router:{
    base: process.env.NODE_ENV === 'production' ? '/nuxt-chain-createaccounts' : '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // pagePublicPath: process.env.NODE_ENV === 'production' ? '/nuxt-chain-createaccounts/' : '/',
    // publicPath: process.env.NODE_ENV === 'production' ? '/nuxt-chain-createaccounts/_nuxt' : '/',
    // assetsPublicPath: process.env.NODE_ENV === 'production' ? '/nuxt-chain-createaccounts/_nuxt' : '/',
    productionSourceMap: false,
    // extractCSS: true, // 所有 CSS 将被提取到单独的文件中
    // extend(config, ctx) {
    //   context.nuxt.routePath
    //   config.basePath = process.env.NODE_ENV === 'production' ? '/nuxt-chain-createaccounts/' : '/'
    // }
  }
}
