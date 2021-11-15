const site_name = "Giordano Bruno - Desenvolvedor Fullstack";
const description =
  "Seja bem-vindo ao meu site! Aqui você pode ver projetos que já desenvolvi, e links para minhas redes sociais.";
const image_link = "https://avatars.githubusercontent.com/u/14043484?v=4?s=400";

export default {
  title: `${site_name}`,
  description: `${description}`,
  keywords:
    "desenvolvedor, developer, javascript, typescript, angular, react, reactjs, nextjs, fullstack, full stack, mern, mean",
  author: "Giordano Bruno",
  language: "Portuguese",
  openGraph: {
    type: "website",
    url: "https://giordano.dev.br",
    title: `${site_name}`,
    description: `${description}`,
    image: `${image_link}`,
  },
};
