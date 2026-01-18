/* React */
import { Link } from "react-router-dom"

/* Images */
import nexia from "../../../assets/Nexia/Nexia.svg"
import x from "../../../assets/Apps/x.svg"
import github from "../../../assets/Apps/github_light.svg"
import discord from "../../../assets/Apps/discord.svg"
import langauge from "../../../assets/Icons/language_light.svg"



const Header = () => {
  return (
    <>
      <header className="cntnrHeader">

        <nav className="boxHeaderA">
          <Link className="lnkheader" to="/">
            <img className="ImageNexia" src={nexia} alt="Image from Nexia" />
          </Link>
        </nav>

        <nav className="boxHeaderB">
          <div className="contentHeader1">
            <Link className="lnkheader" to="/">Guia</Link>
            <Link className="lnkheader" to="/">Recursos</Link>
            <Link className="lnkheader" to="/">Versión</Link>
          </div>

          <div className="contentHeader2">
            <Link className="lnkheader" to="/">
              <img className="ImageL" src={langauge} alt="Language" />
            </Link>
          </div>

          <div className="contentHeader3">
            <Link className="lnkheader" to="/">
              <img className="ImageDc" src={discord} alt="Discord" />
            </Link>
            <Link className="lnkheader" to="https://x.com/dxvv07">
              <img className="ImageX" src={x} alt="X" />
            </Link>
            <Link className="lnkheader" to="https://github.com/DiegoDev-7">
              <img className="ImageGH" src={github} alt="Github" />
            </Link>
          </div>
        </nav>

      </header>
    </>
  )
}

export default Header