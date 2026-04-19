/* Hooks */
import { useEffect, useState } from "react"

/* Images */
import github from "../../../../../assets/Apps/github_light.svg"
import discord from "../../../../../assets/Apps/discord.svg"
import menu from "../../../../../assets/Icons/menu_dark.svg"

import language from "../../../../../assets/Icons/language_light.svg"
import language_es from "../../../../../assets/Icons/language_es.svg"
import language_en from "../../../../../assets/Icons/language_en.svg"
import language_ja from "../../../../../assets/Icons/language_ja.svg"
import language_fr from "../../../../../assets/Icons/language_fr.svg"

/* Components */
import { DiscordHeader } from "./Discord"
import { LanguagesHeader } from "./Languages"



/* Icons for social networks */
type ImageContainProps = {
  clickOption: () => void
}
/* Tipado de iconos */
type Icons = {
  type: "component" | "external"
  src: any
  to?: any
  component?: React.ReactNode
}

type Lang = "es" | "en" | "jp" | "fr"

export function IconsContain({ clickOption }: ImageContainProps) {
  // Header animation
  const [open, setOpen] = useState(true)

  // Overlay control
  const [activeComponent, setActiveComponent] = useState<React.ReactNode | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState<"enter" | "exit">("exit")
  
  // Get language
  const [currentLang, setCurrentLang] = useState<Lang>("es")

  useEffect(() => {
    const lang = (localStorage.getItem("lang") as Lang) || "es"
    setCurrentLang(lang)
  }, [])


  // Icons
  const langIconMap: any = {
    es: language_es,
    en: language_en,
    ja: language_ja,
    fr: language_fr
  }

  // Link, Icons and components
  const icons: Icons[] = [
    { type: "component", src: discord, component: <DiscordHeader /> },
    { type: "component", src: langIconMap[currentLang] || language, component: <LanguagesHeader /> },
    { type: "external", src: github, to: "https://github.com/DiegoDev-7" },
  ]

  
  // Abrir overlay
  const openOverlay = (component: React.ReactNode) => {
    setActiveComponent(component)
    setIsVisible(true)

    requestAnimationFrame(() => {
      setIsAnimating("enter")
    })
  }

  // Cerrar overlay con animación
  const closeOverlay = () => {
    setIsAnimating("exit")

    setTimeout(() => {
      setIsVisible(false)
      setActiveComponent(null)
    }, 350) // igual a tu animation-duration
  }

  // Cerrar panel principal
  const closePanel = () => {
    setOpen(prev => !prev)
    setTimeout(clickOption, 300)
  }



  return (
    <>
      {/* Icons */}
      {icons.map((item, i) => (
        <div
          key={i}
          className={`card-icon-header ${open ? "enter" : "exit"}`}
          onMouseEnter={() => {
            if (item.type === "component") {
              openOverlay(item.component!)
            }
          }}
        >

          {item.type === "external" && (
            <a
              className="icon-image-header-b"
              href={item.to}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={item.src} alt="icon" />
            </a>
          )}

          {item.type === "component" && (
            <div className="icon-image-header-b">
              <img src={item.src} alt="icon" />
            </div>
          )}

        </div>
      ))}


      {/* Menu */}
      <button
        className={`card-icon-header ${open ? "enter" : "exit"}`}
        onClick={closePanel}
      >
        <div className="icon-image-header-b menu">
          <img src={menu} alt="menu icon" />
        </div>
      </button>


      {/* Overlay */}
      {isVisible && (
        <div
          className={`overlay ${isAnimating}`}
          onMouseLeave={closeOverlay}
        >
          <div
            className="overlay-content"
            onMouseEnter={(e) => e.stopPropagation()}
          >
            {activeComponent}
          </div>
        </div>
      )}
    </>
  )
}