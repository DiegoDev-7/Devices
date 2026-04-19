/* Hooks */
import { createContext, useContext, useState } from "react"

/* i18n */
import es from "./es"
import en from "./en"
import ja from "./ja"
import fr from "./fr"

type Lang = "es" | "en" | "ja" | "fr"

const langs = { es, en, ja, fr }

const LangContext = createContext<any>(null)



/* Render languages */
export const LangProvider = ({ children }: any) => {
  const [lang, setLang] = useState<Lang>(
    (localStorage.getItem("lang") as Lang) || "es"
  )

  const t = (path: string): string => {
    return path
      .split(".")
      .reduce((obj: any, key) => obj?.[key], langs[lang]) || path
  }

  const changeLang = (l: Lang) => {
    localStorage.setItem("lang", l)
    setLang(l)
  }

  return (
    <LangContext.Provider value={{ t, lang, changeLang }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)