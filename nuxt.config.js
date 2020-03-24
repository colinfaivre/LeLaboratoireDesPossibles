export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Le laboratoire des possibles',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // Google Search
      { hid: 'description', name: 'description', content: 'Votre application web développée en Vue.js' },
      { hid: 'keywords', name: 'keywords', content: 'le laboratoire des possibles, colin faivre, mobile web specialist, application web, application mobile, back-office, site web, site internet, pwa, progressive web app, application web progressive, développeur vue, développeur nuxt, dev vue, dev nuxt, freelance vue, freelance nuxt, vue.js, javascript, js, nuxt.js, nuxt, front-end, front, développeur vue.js limoges, développeur nuxt.js limoges, à distance, remote' },
      // OpengGraph image (social media sharable)
      { property: 'og:image', content: '/og-image.png' },
      { property: 'og:image:width', content: '1051' },
      { property: 'og:image:height', content: '450' },
      { property: 'og:description', content: 'Votre application web développée en Vue.js' },
      { property: 'og:url', content: 'https://lelaboratoiredespossibles.com' },
      { property: 'og:title', content: 'Le laboratoire des possibles' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Orbitron&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans&display=swap' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css' },

      { rel: 'preconnect', href: 'https://cdn.jsdelivr.net' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#CDB985' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  pwa: {
    manifest: {
      "short_name": "Labo",
      "name": "Le laboratoire des possibles",
      "lang": "fr",
      "background_color": "#1E1E1E",
      "display": "standalone",
      "theme_color": "#1E1E1E"
    },
  },
  workbox: {
    offlineAssets: ['/index.html', '/ar/index.html', '/clones/index.html', '/games/index.html', '/perso/index.html', '/legal/index.html', '/pro/index.html', '/tech/index.html', '/wot/index.html', '/certifications/index.html', '/legal/index.html'],
    offlinePage: '/404.html',
  },
  generate: {
    fallback: true,
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    // offline PWA needs defaultAssets to false to use bundled assets instead of online ressources
    defaultAssets: false,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      themes: {
        light: {
            primary: '#1E1E1E',
            secondary: '#CDB985',
            accent: '#82B1FF',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107',
            background: '#aaa'
        }
      }
    }
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
