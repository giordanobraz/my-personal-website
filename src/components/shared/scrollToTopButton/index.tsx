import { ChevronUpIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export default function ScrollToTop() {
  const [scrollPostition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {scrollPostition > 500 && (
        <Link
          activeClass="active"
          to="top"
          spy={true}
          smooth={true}
          offset={-100}
          duration={700}
        >
          <Box
            title="Ir para o topo"
            position="fixed"
            bottom="20px"
            right={["16px", "84px"]}
            zIndex={1}
            bgColor={"grey.300"}
            borderRadius={50}
            _hover={{
              cursor: "pointer",
            }}
          >
            <ChevronUpIcon w={35} h={35} color="grey.100" />
          </Box>
        </Link>
      )}
    </>
  );
}
