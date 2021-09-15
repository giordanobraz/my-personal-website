import Image from "next/image";
import { Fragment } from "react";
import imgAppPass from "../../../public/images/app_pass_saude.png";
import imgPass from "../../../public/images/cartaopasscombr.png";
import imgDashboard from "../../../public/images/dashboard_react.png";
import imgApi from "../../../public/images/nest_api.png";
import styles from "./index.module.scss";


export default function Card() {
  const projects = [
    {
      image: imgAppPass,
      title: "Pass Saúde - Aplicativo Android",
      info: "Aplicação android para usuários do cartão Pass Saúde. Desenvolvido com Ionic Framework/Angular.",
      link: "https://www.figma.com/file/OVz1a2zOPbB1IlPvcZtQqF/Aplicativo-Pass-Cass?node-id=0%3A1",
    },
    {
      image: imgPass,
      title: "Pass Saúde - Sistema PWA",
      info: "Sistema de gerenciamento do cartão Pass Saúde, desenvolvido com Ionic Framework/Angular.",
      link: "https://cartaopass.com.br/",
    },
    {
      image: imgDashboard,
      title: "Dashboard React",
      info: "Projeto portfólio front-end, desenvolvido com Reactjs, HTML5 e Sass.",
      link: "https://dashboard-react.pages.dev/",
    },
    {
      image: imgApi,
      title: "API REST com Node (NestJS)",
      info: "Projeto portfólio back-end, desenvolvido com o framework NestJS, simulando autenticação, JWT Tokens, e CRUD. Integrado com MongoDB.",
      link: "https://dashboard-react.pages.dev/",
    },
  ];

  return (
    <Fragment>
      {projects.map((project, index) => (
        <div key={index} className={styles.card}>
          <Image
            className={styles.image_card}
            src={project.image}
            alt={project.title}
            width={800}
            height={600}
          />

          <div className={styles.card_content}>
            <div className={styles.card_title}>{project.title}</div>
            <p className={styles.card_text}>{project.info}</p>
            <a className={styles.card_button} href="" target="_blank">
              Visualizar
            </a>
          </div>
        </div>
      ))}
    </Fragment>
  );
}
