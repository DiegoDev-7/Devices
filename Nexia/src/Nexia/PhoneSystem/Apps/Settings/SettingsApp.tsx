/* Hooks */
import { useState } from "react"

/* Components */
import { AboutPhone } from "./Components/AboutPhone"
import { UpdateSystem } from "./Components/UpdateSystem"
import { SecurityStatus } from "./Components/SecurityStatus"
import { SimCard } from "./Components/SimCard"
import { Wifi } from "./Components/Wifi"
import { Bluetooth } from "./Components/Bluetooth"
import { Screen } from "./Components/Screen"
import { Wallpapper } from "./Components/Wallpaper"
import { ControlCenter } from "./Components/ControlCenter"
import { Security } from "./Components/Security"
import { Privacity } from "./Components/Privacy"
import { User } from "./Components/User"
import { Services } from "./Components/Services"


/* Images */
import search from "../../../../assets/Icons/search_light.svg"
import forward from "../../../../assets/Icons/forward_dark.svg"

import smathphone from "../../../../assets/Icons/smathphone_light.svg"
import arrow from "../../../../assets/Icons/arrow_light.svg"
import protect from "../../../../assets/Icons/protect_light.svg"

import simcard from "../../../../assets/Icons/simcard_light.svg"
import wifi from "../../../../assets/Icons/Wifi_light.svg"
import bluetooth from "../../../../assets/Icons/bluetooth_light.svg"

import sun from "../../../../assets/Icons/sun_light.svg"
import rose from "../../../../assets/Icons/rose_light.svg"
import bookmark from "../../../../assets/Icons/bookmark_light.svg"

import lock from "../../../../assets/Icons/lock_light.svg"
import view from "../../../../assets/Icons/view_light.svg"
import user from "../../../../assets/Icons/user_light.svg"
import comment from "../../../../assets/Icons/comment_light.svg"



/* Render */
const SettingsApp = () => {
  // Screens configuration render
  const [options, setOptions] = useState<string>("settings")

  // Container from icons
  type Options = {
    id: number
    containImage: string
    src: string
    alt: string
    description: string
    optionRender: string
  }
  const optionsSettings: Options[] = [
    { id: 1, containImage: "settings-phone", src: smathphone, alt: "Acerca del teléfono", description: "Acerca del teléfono", optionRender: "aboutPhone" },
    { id: 2, containImage: "settings-arrow", src: arrow, alt: "Actualización", description: "Actualizaciones del sistema", optionRender: "updateSystem" },
    { id: 3, containImage: "settings-secure", src: protect, alt: "Estado de Seguridad", description: "Estado de seguridad", optionRender: "securityStatus" },
    { id: 4, containImage: "settings-sim", src: simcard, alt: "Sim", description: "Tarjeta sim", optionRender: "simCard" },
    { id: 5, containImage: "settings-wifi", src: wifi, alt: "Wifi", description: "Wi-Fi", optionRender: "wifi" },
    { id: 6, containImage: "settings-bluetooth", src: bluetooth, alt: "Bluetooth", description: "Bluetooth", optionRender: "bluetooth" },
    { id: 7, containImage: "settings-sun", src: sun, alt: "Pantalla", description: "Pantalla", optionRender: "screen" },
    { id: 8, containImage: "settings-rose", src: rose, alt: "Rosa", description: "Fondo de pantalla", optionRender: "wallpapper" },
    { id: 9, containImage: "settings-bookmark", src: bookmark, alt: "Notificaciones", description: "Centro de control", optionRender: "controlCenter" },
    { id: 12, containImage: "settings-lock", src: lock, alt: "Candado", description: "Seguridad", optionRender: "security" },
    { id: 13, containImage: "settings-view", src: view, alt: "Vista", description: "Privacidad", optionRender: "privacity" },
    { id: 14, containImage: "settings-user", src: user, alt: "Usuario", description: "Usuario", optionRender: "user" },
    { id: 15, containImage: "settings-comments", src: comment, alt: "Comentarios", description: "Servicios y comentarios", optionRender: "services" },
  ]



  return (
    <>
      <div className="Container-app-screen-settings">

        {options === "settings" && (
          <>
            <h3 className="title-app-settings">Configuración</h3>

            <div className="container-app-input-settings">

              <img className="search-input-icon-settings" src={search} alt="Buscar" />

              <input
                className="input-app-settings"
                type="text"
                placeholder="Buscar en Ajustes"
              />
            </div>

            <div className="box-app-screen-settings">
              {optionsSettings.map((v, i) => (
                <>
                  <button key={v.id} className="button-app-settings-options" onClick={() => setOptions(v.optionRender)}>

                    <div className="box-image-settings-options">
                      <div className={`contain-image-settings-options ${v.containImage}`}>
                        <img className="image-settings-options" src={v.src} alt={v.alt} />
                      </div>
                    </div>

                    <div className="box-text-settings-options">
                      <p>{v.description}</p>
                    </div>

                    <div className="box-image-forward-settings-options">
                      <div className="contain-image-forward-settings">
                        <img className="image-forward-settings" src={forward} alt="Icono de flecha" />
                      </div>
                    </div>

                  </button>

                  {(i + 1) % 3 === 0 && <hr className="hr-settings-options" />}
                </>
              ))}
            </div>
          
          </>
        )}

        {options === "aboutPhone" && <AboutPhone back={() => setOptions("settings")} />}
        {options === "updateSystem" && <UpdateSystem back={() => setOptions("settings")} />}
        {options === "securityStatus" && <SecurityStatus back={() => setOptions("settings")} />}
        {options === "simCard" && <SimCard back={() => setOptions("settings")} />}
        {options === "wifi" && <Wifi back={() => setOptions("settings")} />}
        {options === "bluetooth" && <Bluetooth back={() => setOptions("settings")} />}
        {options === "screen" && <Screen back={() => setOptions("settings")} />}
        {options === "wallpapper" && <Wallpapper back={() => setOptions("settings")} />}
        {options === "controlCenter" && <ControlCenter back={() => setOptions("settings")} />}
        {options === "security" && <Security back={() => setOptions("settings")} />}
        {options === "privacity" && <Privacity back={() => setOptions("settings")} />}
        {options === "user" && <User back={() => setOptions("settings")} />}
        {options === "services" && <Services back={() => setOptions("settings")} />}

      </div>
    </>
  )
}

export default SettingsApp