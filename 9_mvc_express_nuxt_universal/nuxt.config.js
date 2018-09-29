const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles/main.css',
    'v-autocomplete/dist/v-autocomplete.css'
    //for using scss
    //'@/assets/css/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src:'~/plugins/component_register.js',ssr:true},
    {src:'~/plugins/vue_autocomplete.js',ssr:true},
    {src:'~/plugins/shuffle.js',ssr:true},
    {src:'~/plugins/chart.js',ssr:false},
    {src:'~/plugins/vue_carousel.js',ssr:false},
    {src:'~/plugins/vue_conciseslider.js',ssr:false},
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],

  //do not have to import axios forever
  //using like a $route in vue
    //Ex.this.$router.push('/')
    //Ex.context.app.$axios.$get('/somepath')
  //axios config from @nuxtjs/axios
  axios:{
    baseUrl:process.env.BASE_URL || 'url not set in BASE_URL'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    },
    
  },
  /*prevent unknow path from user*/ 
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        path:'*',
        component:resolve(__dirname,'~/components/404.vue')
      })
    }
  },
  /*middleware server*/
  /*
  serverMiddleware:[
    bodyParser.json(),
    '~/api'
  ]
  */

}
