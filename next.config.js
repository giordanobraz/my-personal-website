/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "localhost",
      "strapi.giordano.dev.br",
    ],
  },
  i18n: {
    locales: ["pt-BR", "en-US"],
    defaultLocale: "en-US",
  },
};
