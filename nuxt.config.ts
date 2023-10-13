// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages:true,
  vite: {
    clearScreen:true,
  },
  runtimeConfig:{
    // The private keys which are only available within server-side
    apiSecret: "123",
    NUXT_APP_HOST: process.env.NUXT_APP_HOST,
    NUXT_APP_FOOTER_COPY_RIGHT: process.env.NUXT_APP_FOOTER_COPY_RIGHT,
    // Keys within public, will be also exposed to the client-side
    public: {
      NUXT_API_SECRET: process.env.NUXT_API_SECRET,
    }
  },
  css:[
    '~/assets/css/bootstrap.css',
    '~/assets/css/common.css',
    '~/assets/css/button.css',
  ],
  modules:['@nuxtjs/i18n'],
  i18n: {
    vueI18n: "./i18n.config.ts",
    dynamicRouteParams: true,
    strategy: 'prefix_except_default',
    defaultLocale: 'vi',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      fallbackLocale:"vi",
    },
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
        iso: 'en-US',
      },
      {
        code: 'vi',
        name: 'Vietnamese',
        file: 'vi.json',
        iso: 'vi',
      },
    ],
    baseUrl: process.env.NUXT_APP_HOST,
    langDir: 'languages/',
    lazy: true,
  }
})
