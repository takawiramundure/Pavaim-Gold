
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Pavaim Gold | Real Estate & Mining Venture',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description, pavain' },
      { name: 'author', content: 'takaMuInc-anauld.ca' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Quicksand&display=swap'
      }
    ],
    script: [
      // { src: '~/assets/js/slider.js' },
      // { src: '~/assets/js/bootstrap.min.js' },
      // { src: '~/assets/js/html5shiv.js' },
      // { src: '~/assets/js/init.js' },
      // { src: '~/assets/js/jquery.isotope.min.js' },
      // { src: '~/assets/js/jquery.js' },
      // { src: '~/assets/js/jquery.prettyPhoto.js' },
      // { src: '~/assets/js/plugins.js' },
      // { src: '~/assets/js/respond.min.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/components'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
