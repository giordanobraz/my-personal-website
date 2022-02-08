import { DefaultSeo } from "next-seo";
import ContactSection from "../components/homepage/Contact";
import ExperienceSection from "../components/homepage/Experiences";
import IntroductionSection from "../components/homepage/Introduction";
import ProjectSection from "../components/homepage/Projects";
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
