export default {
  // Global page headers:
  head: {
    title: 'contadoresapp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS:
  css: [
    '~assets/css/main.css'
  ],

  styleResources: {
    scss: [
      '~assets/scss/main.scss',
    ]
  },

  // Plugins to run before rendering page:
  plugins: [
    '~plugins/vue-js-modal',
    '~plugins/vee-validate',
    '~plugins/v-tooltip',
    '~plugins/filters',
    { src: '~plugins/vue-js-toggle-button', ssr: false }
  ],

  // Auto import components:
  components: true,

  // Modules for dev and build (recommended):
  buildModules: [
    '@nuxtjs/style-resources',

  ],

  // Modules:
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-fontawesome',
    '@nuxtjs/toast',
    ['nuxt-vuex-localstorage', {
      localStorage: ['localStorage'],
      sessionStorage: ['sessionStorage']
    }]
  ],

  // Axios module configuration:
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000:
    baseURL: '/',
  },

  // PWA module configuration:
  pwa: {
    manifest: {
      lang: 'es'
    }
  },

  fontawesome: {
    component: 'fa',
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faHome', 'faTimes', 'faPlus', 'faMinus', 'faTrash', 'faEraser']
      }
    ]
  },

  toast: {
    position: 'top-center',
    duration: '3000'
  },


  // Build Configuration:
  build: {
    transpile: ["vee-validate/dist/rules"],
  }
}
