import { Box, Text, SimpleGrid } from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <Box w="100%">
      <Box>
        <Text>Content</Text>
      </Box>
      <SimpleGrid columns={3} spacing={15}>
        <Box>First</Box>
        <Box>Second</Box>
        <Box>Third</Box>
      </SimpleGrid>
    </Box>
  );
}
