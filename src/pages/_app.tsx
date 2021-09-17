import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import * as gtag from "../lib/gtag";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
