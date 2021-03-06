export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "data-by-design",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  serverMiddleware: {
    "/api": "~/api/index.js",
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/fonts.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/breakpoints.js"],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/tailwindcss"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/http"],

  target: "static",

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["gsap"],
  },

  server: {
    port: "3003",
  },

  generate: {
    routes: ["/chapters/peabody", "/chapters/playfair", "/chapters/dubois"],
  },

  tailwindcss: {
    exposeConfig: true,
  },

  devServerHandlers: [],
};
