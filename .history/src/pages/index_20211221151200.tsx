import ContactSection from "../components/mainPage/Contact";
import ExperienceSection from "../components/mainPage/Experiences";
import IntroductionSection from "../components/mainPage/Introduction";
import ProjectSection from "../components/mainPage/Projects";

export default function HomePage() {
  return (
    <>
      <IntroductionSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}
