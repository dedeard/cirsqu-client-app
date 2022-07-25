const baseUrl = process.env.BASE_URL || 'http://localhost:3000'
const baseApiUrl = process.env.BASE_API_URL || 'http://localhost:4000'

export default {
  ssr: false,

  publicRuntimeConfig: {
    baseUrl,
    baseApiUrl,
    production: process.env.NODE_ENV === 'production',
    algoliaAppId: process.env.ALGOLIA_APP_ID,
    algoliaApiKey: process.env.ALGOLIA_API_KEY,
    pusherKey: process.env.PUSHER_KEY,
  },

  head: {
    title: 'frontend',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  loading: {
    color: '#007bff',
    height: '3px',
  },

  css: ['~/assets/fonts/inter/style.css', '~/assets/scss/main.scss'],

  plugins: ['~/plugins/ApiErrorResponse.js', '~/plugins/Axios.js', '~/plugins/Swal.js'],

  components: true,

  buildModules: [],

  modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios', 'nuxt-client-init-module'],

  axios: {
    baseURL: baseApiUrl,
    progress: false,
  },

  bootstrapVue: {
    icons: true,
    bootstrapCSS: false,
    bootstrapVueCSS: false,
  },

  build: {},
}
