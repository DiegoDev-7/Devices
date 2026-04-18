import { Link } from "react-router-dom"

/* Hooks */
import { useState } from "react"

/* Images */
import github from "../../../../../assets/Apps/github_light.svg"
import discord from "../../../../../assets/Apps/discord.svg"
import language from "../../../../../assets/Icons/language_light.svg"
import menu from "../../../../../assets/Icons/menu_dark.svg"



/* Icons for social networks */
type ImageContainProps = {
  clickOption: () => void
}
export function IconsContain({ clickOption }: ImageContainProps) {
  // Render images and directions
  type Icons = {
    type: string
    src: any,
    to: string
  }
  const icons: Icons[] = [
    { type: "div", src: language, to: "" },
    { type: "link", src: discord, to: "/" },
    { type: "link", src: github, to: "https://github.com/DiegoDev-7" },
  ]

  const [open, setOpen] = useState(true)

  const closePanel = () => {
    setOpen(prev => !prev)

    setTimeout(() => {
      clickOption()
    }, 300)
  }



  return (
    <>
      {icons.map((item, i) => (
        <div key={i} className={`card-icon-header ${open ? "enter" : "exit"}`}>

          {item.type === "link" ? (
            <Link className="icon-image-header-b" to={item.to}>
              <img src={item.src} alt="icon" />
            </Link>
          ) : (
            <div className="icon-image-header-b">
              <img src={item.src} alt="icon" />
            </div>
          )}

        </div>
      ))}

      <button className={`card-icon-header ${open ? "enter" : "exit"}`} onClick={closePanel}>

        <div className="icon-image-header-b menu">
          <img src={menu} alt="menu icon" />
        </div>

      </button>
    </>
  )
}