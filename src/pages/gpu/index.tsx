import { Box, SimpleGrid } from "@chakra-ui/react";
import Product from "../../components/gpu/ProductCard";
import { getAllProducts } from "../../services/gpu";

interface IProduct {
  id: string;
  title: string;
  price: number;
  updatedPrice: number;
  createdAt: Date;
  updatedAt?: Date;
}

interface GPUProps {
  products: IProduct[];
}

export default function Gpu({ products }: GPUProps) {
  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
      minHeight={"90vh"}
      paddingY={"7rem"}
      paddingX={"2rem"}
      margin={"0 auto"}
    >
      <SimpleGrid spacing={3} columns={[1, 2, 3, 4, 5]}>
        {products.map(
          (product) =>
            product.updatedPrice < product.price && (
              <Product
                key={product.id}
                title={product.title}
                price={product.price}
                updatedPrice={product.updatedPrice}
              />
            )
        )}
      </SimpleGrid>
    </Box>
  );
}

export async function getServerSideProps() {
  const response = await getAllProducts();
  const products = response.data;

  return {
    props: {
      products,
    },
  };
}
