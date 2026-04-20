/* Hooks */
import { useState } from "react"

/* i18n */
import { useLang } from "../../../i18n/LangContext"

/* Sections */
import { useUser } from "../sections/Settings/hooks/useUser"
import Profile from "../sections/Profile"
import Sopport from "../sections/Support"

/* Components */
import { TermsPrivacy } from "../components/TermsPrivacy"
import { LoadingIcon } from "../../components/loading.ldrs"

/* Sections */
import ConfigAccount from "../sections/Settings/Settings"
import { ConfigWithGoogle } from "../sections/Settings/components/ConfigWithGoogle"



/* Home panel for login */
export function HomePanel({ open, setView }: any) {
  const { t } = useLang()

  return (
    <>
      <div className={`account-interfaz ${open ? "enter" : "exit"}`}>

        <p>{t("auth.header.intro")}</p>

        <button className="login" onClick={() => setView("login")}>
          {t("auth.header.login")}
        </button>

        <button className="register" onClick={() => setView("register")}>
          {t("auth.header.register")}
        </button>

      </div>

      <TermsPrivacy />
    
    </>
  )
}



/* Render interfaz panel - login nexia */
type Section = "profile" | "sopport" | "config"
export function InterfacePanel() {
  const { t } = useLang()
  const [section, setSection] = useState<Section>("profile")

  const { user } = useUser()



  return (
    <div className="interfaz-panel">

      <nav className="interfaz-menu">

        <button onClick={() => setSection("profile")}>{t("auth.header.menu.profile")}</button>

        <button onClick={() => setSection("sopport")}>{t("auth.header.menu.support")}</button>

        <button onClick={() => setSection("config")}>{t("auth.header.menu.config")}</button>
        
      </nav>

      <div className="interfaz-content">

        {user ? (
          <>
            {section === "profile" && <Profile />}

            {section === "sopport" && <Sopport />}

            {section === "config" && (
              user.provider?.toLowerCase() === "google"
                ? <ConfigWithGoogle user={user} />
                : <ConfigAccount user={user} />
            )}
          </>
        ) : (
          <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <LoadingIcon color="black" />
          </div>
        )}

      </div>

    </div>
  )
}