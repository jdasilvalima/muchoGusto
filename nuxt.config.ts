// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: "static",
  css: ['~/assets/mainStyle.css'],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      appDomain: "/muchoGusto/",
    }
  },
  router: {
    base: '/muchoGusto/'
  }
})
