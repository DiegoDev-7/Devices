/* Images */
import search from "../../../assets/Icons/search_light.svg"
import forward from "../../../assets/Icons/forward_dark.svg"

import smathphone from "../../../assets/Icons/smathphone_light.svg"
import arrow from "../../../assets/Icons/arrow_light.svg"
import protect from "../../../assets/Icons/protect_light.svg"

import simcard from "../../../assets/Icons/simcard_light.svg"
import wifi from "../../../assets/Icons/Wifi_light.svg"
import bluetooth from "../../../assets/Icons/bluetooth_light.svg"

import sun from "../../../assets/Icons/sun_light.svg"
import rose from "../../../assets/Icons/rose_light.svg"
import bookmark from "../../../assets/Icons/bookmark_light.svg"

import lock from "../../../assets/Icons/lock_light.svg"
import view from "../../../assets/Icons/view_light.svg"
import user from "../../../assets/Icons/user_light.svg"
import comment from "../../../assets/Icons/comment_light.svg"



/* Render */
const SettingsApp = () => {
  /* Container from icons */
  type Options = {
    id: number
    containImage: string
    classImage: string
    src: string
    alt: string
    description: string
  }
  const optionsSettings: Options[] = [
    { id: 1, containImage: "settings-phone", classImage: "image-settings-options", src: smathphone, alt: "Acerca del teléfono", description: "Acerca del teléfono"},
    { id: 2, containImage: "settings-arrow", classImage: "image-settings-options", src: arrow, alt: "Actualización", description: "Actualizaciones del sistema"},
    { id: 3, containImage: "settings-secure", classImage: "image-settings-options", src: protect, alt: "Estado de Seguridad", description: "Estado de seguridad"},
    { id: 4, containImage: "settings-sim", classImage: "image-settings-options", src: simcard, alt: "Sim", description: "Tarjeta sim"},
    { id: 5, containImage: "settings-wifi", classImage: "image-settings-options", src: wifi, alt: "Wifi", description: "Wi-Fi"},
    { id: 6, containImage: "settings-bluetooth", classImage: "image-settings-options", src: bluetooth, alt: "Bluetooth", description: "Bluetooth"},
    { id: 7, containImage: "settings-sun", classImage: "image-settings-options", src: sun, alt: "Pantalla", description: "Pantalla"},
    { id: 8, containImage: "settings-rose", classImage: "image-settings-options", src: rose, alt: "Rosa", description: "Fondo de pantalla"},
    { id: 9, containImage: "settings-bookmark", classImage: "image-settings-options", src: bookmark, alt: "Notificaciones", description: "Centro de control"},
    { id: 12, containImage: "settings-lock", classImage: "image-settings-options", src: lock, alt: "Candado", description: "Seguridad"},
    { id: 13, containImage: "settings-View", classImage: "image-settings-options", src: view, alt: "Vista", description: "Privacidad"},
    { id: 14, containImage: "settings-user", classImage: "image-settings-options", src: user, alt: "Usuario", description: "Usuario"},
    { id: 15, containImage: "settings-comments", classImage: "image-settings-options", src: comment, alt: "Comentarios", description: "Servicios y comentarios"},
  ]

  return (
    <>
      <div className="Container-app-screen-settings">

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
              <div key={v.id} className="contain-app-settings-options">

                <div className="box-image-settings-options">
                  <div className={`contain-image-settings-options ${v.containImage}`}>
                    <img className={v.classImage} src={v.src} alt={v.alt} />
                  </div>
                </div>

                <div className="box-text-settings-options">
                  <p>{v.description}</p>
                </div>

                <div className="box-image-forward-settings-options">
                  <div className="contain-image-forward-settings">
                    <img className="image-forward-settings" src={forward} alt="flecha" />
                  </div>
                </div>

              </div>

              {(i + 1) % 3 === 0 && <hr className="hr-settings-options" />}
            </>
          ))}
        </div>

      </div>
    </>
  )
}

export default SettingsApp