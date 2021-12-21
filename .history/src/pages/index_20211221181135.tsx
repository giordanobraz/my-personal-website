import { DefaultSeo } from "next-seo";
import ContactSection from "../components/mainPage/Contact";
import ExperienceSection from "../components/mainPage/Experiences";
import IntroductionSection from "../components/mainPage/Introduction";
import ProjectSection from "../components/mainPage/Projects";
import SEO from "../configs/seo.config";

export default function HomePage() {
  return (
    <>
      <DefaultSeo {...SEO} />
      <IntroductionSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}
