/* React */
import { memo, useState } from "react"
import { Link } from "react-router-dom"

/* Images */
import nexia from "../../../assets/Nexia/Nexia.svg"
import x from "../../../assets/Apps/x.svg"
import github from "../../../assets/Apps/github_light.svg"
import discord from "../../../assets/Apps/discord.svg"
import language from "../../../assets/Icons/language_light.svg"
import menu from "../../../assets/Icons/menu_dark.svg"
import { LoginPanel } from "../../components/Login"
import { RegisterPanel } from "../../components/Register"



/* Render header */
const Header = memo(() => {
  const [option, setOption] = useState<boolean>(false)
  
  const handleoption = () => {
    setOption(prev => !prev)
  }



  return (
    <>
      <header className="container-header">

        <nav className="box-header-a">

          <Link className="contain-image-header-a" to={"/"}>
            <img src={nexia} alt="Nexia logo" />
          </Link>

        </nav>

        <nav className="box-header-b">

          {!option && <IconsContain clickOption={handleoption} /> }
          
          {option && <InterfazContain clickOption={handleoption} /> }
            
        </nav>

      </header>
    </>
  )
})



/* Icons for social networks */
type ImageContainProps = {
  clickOption: () => void
}
function IconsContain({ clickOption }: ImageContainProps) {
  type Icons = {
    type: string
    src: any,
    to: string
  }
  const icons: Icons[] = [
    { type: "div", src: language, to: "" },
    { type: "link", src: github, to: "/" },
    { type: "link", src: discord, to: "/" },
    { type: "link", src: x, to: "/" }
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
        <>
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
        </>
      ))}

      <button className={`card-icon-header ${open ? "enter" : "exit"}`} onClick={closePanel}>
        <div className="icon-image-header-b">
          <img src={menu} alt="menu icon" />
        </div>
      </button>
    </>
  )
}



/* Interfaces for home, register or login */
function InterfazContain({ clickOption }: ImageContainProps) {
  const [view, setView] = useState("home")
  const [open, setOpen] = useState(true)

  const closePanel = () => {
    setOpen(prev => !prev)

    setTimeout(() => {
      clickOption()
    }, 300)
  }



  return (
    <>
      <div className={`contain-interfaz-header ${open ? "enter" : "exit"}`}> 

        <button onClick={closePanel} className="box-interfaz-header">  
          <div className="icon-interfaz-header">
            <img src={menu} alt="Menú logo" />
          </div>
        </button>

        
        {/* Views */}
        {view === "login" && <LoginPanel onBack={() => setView("home")} />}
        {view === "register" && <RegisterPanel onBack={() => setView("home")} />}
        {view === "home" && (
          <>
            <div className={`account-interfaz ${open ? "enter" : "exit"}`}>
              <p>Accede para guardar preferencias y poder usar Nexia.</p>

              <button className="login" onClick={() => setView("login")}>
                Iniciar sesion
              </button>

              <button className="register" onClick={() => setView("register")}>
                Registrarse
              </button>
            </div>
            <div className="interfaz-terms-privacy">
              <p className="terms">
                Al iniciar sesion o crear una cuenta aceptas nuestros 
                <Link to="/terms"> Terminos y Condiciones </Link> 
                y la 
                <Link to="/privacy"> Política de Privacidad</Link>.
              </p>
            </div>
          </>
        )}

      </div>
    </>
  )
}


Header.displayName = "Header"


export default Header