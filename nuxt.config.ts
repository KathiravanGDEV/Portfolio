// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vesp/nuxt-fontawesome"],
  app: {
    head: {
      title: "Portfolio | Kathiravan G",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
  fontawesome: {
    icons: {
      solid: ["dollar-sign", "cog", "circle", "check", "calendar"],
      regular: ["user"],
    },
  },
});
