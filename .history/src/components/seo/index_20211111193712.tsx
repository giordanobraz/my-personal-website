import { useContext } from "react";
import { GlobalContext } from "../../pages/_app";

interface Seo {
  siteName: string;
  defaultSeo: {
    metaTitle: string;
    metaDescription: string;
  };
}

export const Seo = ({ seo }: Seo) => {
  const { defaultSeo, siteName } = useContext(GlobalContext);
};
