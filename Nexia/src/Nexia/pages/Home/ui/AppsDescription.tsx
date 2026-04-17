/* Hooks */
import { useState } from "react"

/* Images */
import notes from "../../../../assets/Apps/notes.svg"
import calculator from "../../../../assets/Apps/calculator.svg"
import archive from "../../../../assets/Apps/archive.svg"
import settings_light from "../../../../assets/Apps/settings_light.svg"
import clock from "../../../../assets/Apps/clock.svg"
import calendar from "../../../../assets/Apps/calendar.svg"
import gallery from "../../../../assets/Apps/gallery.svg"
import security from "../../../../assets/Apps/security.svg"
import rewards from "../../../../assets/Apps/rewards.svg"
import bank from "../../../../assets/Apps/bank.svg"
import cash from "../../../../assets/Apps/cash.svg"
import radio from "../../../../assets/Apps/radio.svg"
import simpsons2 from "../../../../assets/Apps/simsons2.jpg"
import simcard_light from "../../../../assets/Apps/simcard_light.svg"
import message from "../../../../assets/Apps/message_light.svg"
import phone_blue from "../../../../assets/Apps/phone_blue.svg"
import contact from "../../../../assets/Apps/contact_light.svg"



/* Frame */
export const AppsDescription = () => {
  // Change option for view the images or text
  const [optionTI, setOptionTI] = useState<any>(null)

  // Render images with text
  type Images = {
    id: number
    src: string
    alt: string
  }
  const ContentImage: Images[] = [
    { id: 1, src: archive, alt: "Archivos" },
    { id: 2, src: bank, alt: "Banco" },
    { id: 3, src: calculator, alt: "Calculadora" },
    { id: 4, src: calendar, alt: "Calendario" },
    { id: 5, src: cash, alt: "Dinero" },
    { id: 6, src: clock, alt: "Reloj" },
    { id: 7, src: contact, alt: "Contacto" },
    { id: 8, src: message, alt: "Mensajes" },
    { id: 9, src: gallery, alt: "Galeria" },
    { id: 10, src: notes, alt: "Notas" },
    { id: 11, src: radio, alt: "Radio" },
    { id: 12, src: phone_blue, alt: "Teléfono" },
    { id: 13, src: rewards, alt: "Recompensas" },
    { id: 14, src: security, alt: "Seguridad" },
    { id: 15, src: settings_light, alt: "Ajustes" },
    { id: 16, src: simcard_light, alt: "Sim" },
    { id: 17, src: simpsons2, alt: "Simpsons" },
  ]



  return (
    <>
      <section id="apps" className="container-appsDescription">

        <div className="contain-appsDescription">
          <div className="box-grid-appsDescription">
            <h2>Aplicaciones</h2>

            <br />

            <p>Cada aplicación fue diseñada y desarrollada de forma independiente, pero todas comparten estado y reaccionan a eventos del sistema.</p>

            {ContentImage.map(v => (
              <div key={v.id} className="grid-app-appsDescription" onMouseEnter={() => setOptionTI(v.id)} onMouseLeave={() => setOptionTI(null)}>
                {optionTI === v.id ? (
                  <div className={`contain-image-appsDescription ${optionTI ? "in" : "out"}`}>
                    <img src={v.src} alt={v.alt} /> 
                  </div>
                  ) : (
                    <span className={optionTI === v.id ? "out" : "in"}>
                      {v.alt}
                    </span>
                  )
                }
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  )
}