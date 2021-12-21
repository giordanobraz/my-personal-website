import { Flex } from "@chakra-ui/react";
import ExperienceSection from "../components/mainPage/Experiences";
import IntroductionSection from "../components/mainPage/Introduction";

export default function HomePage() {
  return (
    <>
      <Flex maxWidth={1120} margin="0 auto">
        <IntroductionSection />
        <ExperienceSection />
      </Flex>
    </>
  );
}
