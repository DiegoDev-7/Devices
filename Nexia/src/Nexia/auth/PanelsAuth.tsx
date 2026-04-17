/* Hooks */
import { useState } from "react"

/* Images */
import nexiaWord from "../../assets/Nexia/NexiaWord.webp"
import menu from "../../assets/Icons/menu_dark.svg"

/* Components */
import { LoginPanel } from "../auth/screens/Login"
import { RegisterPanel } from "../auth/screens/Register"

/* Sections */
import { HomePanel, InterfacePanel } from "./screens/Header_Interface"



/* Interfaces for home, register or login */
type PublicSection = "home" | "login" | "register"
type ImageContainProps = {
  clickOption: () => void
}
export function PanelAuth({ clickOption }: ImageContainProps) {
  // Screens
  const [view, setView] = useState<PublicSection>("home")
  const [open, setOpen] = useState<boolean>(true)

  // Token to user
  const token = localStorage.getItem("token")
  const isAuthenticated = !!token


  const closePanel = () => {
    setOpen(prev => !prev)

    setTimeout(() => {
      clickOption()
    }, 300)
  }



  return (
    <>
      <div className={`contain-interfaz-header-left ${open ? "enter" : "exit"}`}>
        <div className="image-interfaz-header">
          <img src={nexiaWord} alt="Nexia logo" />
        </div>
      </div>

      <div className={`contain-interfaz-header-right ${open ? "enter" : "exit"}`}> 

        <button onClick={closePanel} className="box-interfaz-header">  
          <div className="icon-interfaz-header">
            <img src={menu} alt="Menú logo" />
          </div>
        </button>

        
        {isAuthenticated ? (
          <InterfacePanel />
        ) : (
          <>
            {view === "home" && <HomePanel setView={setView} open={open} />}
            {view === "login" && <LoginPanel onBack={() => setView("home")} />}
            {view === "register" && <RegisterPanel onBack={() => setView("home")} />}
          </>
        )}
        
      </div>
    </>
  )
}