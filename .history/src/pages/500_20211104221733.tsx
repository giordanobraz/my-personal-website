import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function InternalServerErrorPage() {
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
    <div>
      <h1>Erro interno do servidor.</h1>
      <p>
        Redirecionando em <span>{count}</span> segundos.
      </p>
    </div>
  );
}
