// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxt/image"],
  nitro: {
    experimental: {
      database: true,
    },
  },
  routeRules: {
    "/": {
      ssr: false,
    },
    "/posts": {
      ssr: true,
    },
    "/posts/:{id}": {
      ssr: true,
    },
  },
});
