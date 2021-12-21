const site_name = "Giordano Bruno - Desenvolvedor";
const description =
  "Aqui eu posto alguns textos e mostro alguns trabalhos que faço. Vem ver!";
const image_link = "https://avatars.githubusercontent.com/u/14043484?v=4?s=400";

export default {
  title: `${site_name}`,
  description: `${description}`,
  author: "Giordano Bruno Borges Braz da Silva",
  language: "Portuguese",
  openGraph: {
    type: "website",
    url: "https://giordano.dev.br",
    locale: "pt_BR",
    title: `${site_name}`,
    description: `${description}`,
    site_name: `${site_name}`,
    images: [
      {
        url: `${image_link}`,
        alt: `${site_name}`,
        width: 460,
        heigth: 460,
        type: "image/jpeg",
      },
    ],
  },
};