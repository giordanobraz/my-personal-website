
interface PortfolioItem {
  image: string;
  title: string;
  info: string;
  link: string;
}

interface PageProps {
  items: PortfolioItem[];
}

export default function PortfolioItems() {
  return {};
  // <Box
  //   w={"full"}
  //   bg={"black.400"}
  //   boxShadow={"2xl"}
  //   p={6}
  //   overflow={"hidden"}
  //   key={post.slug}
  // >
  //   <Box h={"210px"} bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
  //     <Image
  //       src={`${process.env.NEXT_PUBLIC_STRAPI_API}${post.image.url}`}
  //       layout={"fill"}
  //       loading={"lazy"}
  //       objectFit={"cover"}
  //     />
  //   </Box>
  //   <Stack cursor="pointer" spacing={5}>
  //     <Text color={"green.400"} fontSize={"14px"} letterSpacing={1.1}>
  //       {post.published_at}
  //     </Text>
  //     <Heading
  //       fontSize={"26px"}
  //       fontWeight={"normal"}
  //       maxW="25ch"
  //       overflow="hidden"
  //       textOverflow="ellipsis"
  //       whiteSpace="nowrap"
  //       title={post.title}
  //     >
  //       {post.title}
  //     </Heading>
  //     <Link href={`/posts/${post.slug}`} _hover={{ textDecor: "none" }}>
  //       <Button
  //         fontWeight={"normal"}
  //         mt={6}
  //         w={"full"}
  //         bg={"blue.700"}
  //         color={"white"}
  //         rounded={"xl"}
  //         _hover={{
  //           bg: "blue.500",
  //         }}
  //         _focus={{
  //           bg: "blue.500",
  //         }}
  //       >
  //         Ler Artigo
  //       </Button>
  //     </Link>
  //   </Stack>
  // </Box>
}
