// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  app: {
    head: {
      title: "Nuxt Movie",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, user-scalable=no",
        },
      ],
    },
  },

  css: [
    "vuetify/styles/main.sass",
    "@mdi/font/css/materialdesignicons.css",
    "@/assets/css/main.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  modules: ["@nuxtjs/tailwindcss"],
});
