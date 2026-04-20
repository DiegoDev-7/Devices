/* Hooks */
import { useState } from "react"

/* Images */
import colombia from "../../../../../assets/Icons/Colombia.jpg"
import united_states from "../../../../../assets/Icons/United_States.jpg"
import japan from "../../../../../assets/Icons/Japan.jpg"
import france from "../../../../../assets/Icons/France.jpg"



type Lang = "es" | "en" | "jp" | "fr"

/* Component languages */
export const LanguagesHeader = () => {
  const language = [
    { id: 1, img: colombia, alt: "Colombia", key: "es" },
    { id: 2, img: united_states, alt: "United States", key: "en" },
    { id: 3, img: japan, alt: "Japan", key: "ja" },
    { id: 4, img: france, alt: "France", key: "fr" }
  ]

  const [current, setCurrent] = useState<Lang>(
    (localStorage.getItem("lang") as Lang) || "es"
  )

  const handleSelect = (lang: Lang) => {
    localStorage.setItem("lang", lang)
    setCurrent(lang)

    window.location.reload()
  }



  return (
    <div className="overlay-languages">

      {language.map(v => (
        <div 
          key={v.id} 
          className={`box-languages-image ${current === v.key ? "" : ""}`}
          onClick={() => handleSelect(v.key as Lang)}
        >
          <img src={v.img} alt={v.alt} />
          
          <div className="box-label-images">
            <span>{v.key.toLocaleUpperCase()}</span>
          </div>
        </div>
      ))}

    </div>
  )
}