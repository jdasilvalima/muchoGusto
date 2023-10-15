// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  head: {
    title: 'muchoGusto',
    htmlAttrs: {
      lang: 'en',
    },
  },

  css: ['~/assets/mainStyle.css'],
  devtools: { enabled: true },

  app: {
    baseURL: '/muchoGusto/',
    buildAssetsDir: '/_nuxt/',
  },

  runtimeConfig: {
    public: {
      domain: '/muchoGusto/',
    }
  },
})
