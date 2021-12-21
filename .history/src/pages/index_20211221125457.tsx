import { Flex } from "@chakra-ui/react";
import ExperienceSection from "../components/mainPage/Experiences";
import IntroductionSection from "../components/mainPage/Introduction";

export default function HomePage() {
  return (
    <>
      <Flex 
      flexDir={["column", "column", "row"]}
      maxWidth={1120}      
      >
        <IntroductionSection />
        <ExperienceSection />
      </Flex>
    </>
  );
}
