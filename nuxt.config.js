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
      { name: 'author', content: 'lion(https://github.com/idoall)' },
      { hid: 'keywords', name: 'keywords', content: 'nuxt,nodejs,web3,sol,eth,bp58,bip39' },
      { hid: 'description', name: 'description', content: 'Nuxt+NodeJs+在线创建BSC/ETH/SOL钱包' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: 'https://mshk.top/wp-content/uploads/2017/08/logo_248248.png' },
      { rel: 'icon', type: 'image/x-icon', href: 'https://mshk.top/wp-content/uploads/2017/08/logo_248248-150x150.png' },
      { rel: 'shortcut icon', href: 'https://mshk.top/wp-content/uploads/2017/08/logo_248248-150x150.png' },
    ],
    script: [
      {src: 'https://hm.baidu.com/hm.js?f3bf6506a7fd54484864e940c8583aa3'}
    ]
  },


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
  ],


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/mshk.css',
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-vue/dist/bootstrap-vue.css',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],


  router:{
    // 配置路由根目录
    base: process.env.NODE_ENV === 'production' ? '/nuxt-chain-createaccounts' : '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    /*
    ** You can extend webpack config here
    */
    assetsPublicPath: process.env.NODE_ENV === 'production' ? '/nuxt-chain-createaccounts/_nuxt' : '/',
    // productionSourceMap: false,
    extractCSS: process.env.NODE_ENV === 'production', // 所有 CSS 将被提取到单独的文件中
    
  }
}
