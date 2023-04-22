export default defineNuxtConfig({
  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: "wBMAU73fLl03FjaTAQrdeAtt",
        apiOptions: {
          region: "us", // When creating your space in US region (EU default)
          version: "draft",
        },
      },
    ],
    '@nuxtjs/tailwindcss',
  ],
});
