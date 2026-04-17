/* Hooks */
import { useState } from "react"

/* Sections */
import Profile from "../sections/Profile"
import Sopport from "../sections/Support"

/* Components */
import { TermsPrivacy } from "../components/TermsPrivacy"

/* Sections */
import Configuration from "../sections/Configuration"



/* Home panel for login */
export function HomePanel({ open, setView }: any) {
  return (
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

      <TermsPrivacy />
    
    </>
  )
}



/* Render interfaz panel - login nexia */
type Section = "profile" | "sopport" | "config"
export function InterfacePanel() {
  const [section, setSection] = useState<Section>("profile")

  return (
    <div className="interfaz-panel">

      <nav className="interfaz-menu">

        <button onClick={() => setSection("profile")}>Perfil</button>

        <button onClick={() => setSection("sopport")}>Soporte</button>

        <button onClick={() => setSection("config")}>Configuración</button>
        
      </nav>

      <div className="interfaz-content">

        {section === "profile" && <Profile />}

        {section === "sopport" && <Sopport />}

        {section === "config" && <Configuration />}

      </div>

    </div>
  )
}