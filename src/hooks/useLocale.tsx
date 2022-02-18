import { useRouter } from "next/router";
import { createContext, ReactNode, useContext } from "react";

type LocateContextType = {
  children: ReactNode;
};

export const LocaleContext = createContext("pt-BR");

export function LocaleProvider({ children }: LocateContextType) {
  const router = useRouter();
  const locale = router.locale ? router.locale : "pt-BR";

  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
}

export const useLocale = () => useContext(LocaleContext);
