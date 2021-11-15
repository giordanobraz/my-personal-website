import { Center } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Custom404() {
  const router = useRouter();
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count > 0) {
      setTimeout(() => setCount(count - 1), 1000);
    } else {
      router.back();
    }
  }, [count, router]);

  return (
    <Center
    height={"calc(100vh - 10rem)"}
    >
      <h1>Página não encontrada!</h1>
      <p>
        Redirecionando em <span>{count}</span> segundos.
      </p>
    </Center>
    // <div>
    // </div>
  );
}
