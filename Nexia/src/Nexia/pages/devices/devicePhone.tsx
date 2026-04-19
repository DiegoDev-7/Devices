import { Navigate } from "react-router-dom"

/* i18n */
import { useLang } from "../../../i18n/LangContext"

/* Phone */
import PhoneSys from "../../SystemPhone/PhoneSys"

/* Images */
import rose_light from "../../../assets/Nexia/rose_light.svg"
import calculator from "../../../assets/Apps/calculator.svg"
import calendar from "../../../assets/Apps/calendar.svg"
import contact from "../../../assets/Apps/contact.svg"
import folder from "../../../assets/Apps/folder.svg"
import bank from "../../../assets/Apps/bank.svg"
import clock from "../../../assets/Apps/clock.svg"
import radio from "../../../assets/Apps/radio.svg"
import notes from "../../../assets/Apps/notes.svg"
import cash from "../../../assets/Apps/cash.svg"
import message from "../../../assets/Apps/message.svg"
import settings from "../../../assets/Apps/settings_dark.svg"
import simcard from "../../../assets/Apps/simcard.svg"
import phone from "../../../assets/Apps/phone.svg"



/* Render */
const DevicePhoneRender = () => {
  const { t } = useLang()

  /* Apps icons */
  type Apps = {
    src: string,
    alt: string
  }
  const apps: Apps[] = [
    { src: calculator, alt: "CApp alculadora"},
    { src: calendar, alt: "App Calendario"},
    { src: notes, alt: "App Notas" },
    { src: clock, alt: "App Reloj"},
    { src: folder, alt: "App Archivos"},
    { src: settings, alt: "App Ajustes" },
    { src: contact, alt: "App Contacto"},
    { src: cash, alt: "App Dinero" },
    { src: phone, alt: "App Teléfono" },
    { src: message, alt: "App Mensaje" },
    { src: bank, alt: "App Banco"},
    { src: radio, alt: "App Radio"},
    { src: simcard, alt: "App SIM" },
  ]

  // If the user has a token, enter the page otherwise not
  const token = localStorage.getItem("token")

  if (!token) return <Navigate to="/" />



  return (
    <>
      <div className="container-main-phone">

        {/* Nexia Rose, text */}
        <section className="box-phone-a">
          <div className="box-image-phone-rose">
            <img src={rose_light} alt="Nexia rose" />
          </div>
        </section>


        {/* CellPhone */}
        <section className="box-phone-b">

          <PhoneSys />

        </section>


        {/* Context of the phone */}
        <section className="box-phone-c">
          <div className="content-phone-left">

            <div className="box-text-phone-left">

              <h3>{t("devices.phone.appsTitle")}</h3>
              
              <p>
                {t("devices.phone.appsDescription1")}
              </p>
              
              <br />
              
              <p>
                {t("devices.phone.appsDescription2")}
              </p>

            </div>

          </div>

          {/* Icons */}
          <div className="box-icons-right">
            <div className="box-image-phone-right">

              {apps.map((icon, i) => (
                <div key={i} className="container-image-phone-right">
                  <img src={icon.src} alt={`Image of the ${icon.alt}`} />
                </div>
              ))}

            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default DevicePhoneRender