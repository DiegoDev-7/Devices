/* Hooks */
import { useState } from "react"

/* i18n */
import { useLang } from "../../../../i18n/LangContext"

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
  const { t } = useLang()

  // Change option for view the images or text
  const [optionTI, setOptionTI] = useState<any>(null)

  // Render images with text
  type Images = {
    id: number
    src: string
    altKey: string
  }
  const ContentImage: Images[] = [
    { id: 1, src: archive, altKey: "apps.files" },
    { id: 2, src: bank, altKey: "apps.bank" },
    { id: 3, src: calculator, altKey: "apps.calculator" },
    { id: 4, src: calendar, altKey: "apps.calendar" },
    { id: 5, src: cash, altKey: "apps.money" },
    { id: 6, src: clock, altKey: "apps.clock" },
    { id: 7, src: contact, altKey: "apps.contact" },
    { id: 8, src: message, altKey: "apps.messages" },
    { id: 9, src: gallery, altKey: "apps.gallery" },
    { id: 10, src: notes, altKey: "apps.notes" },
    { id: 11, src: radio, altKey: "apps.radio" },
    { id: 12, src: phone_blue, altKey: "apps.phone" },
    { id: 13, src: rewards, altKey: "apps.rewards" },
    { id: 14, src: security, altKey: "apps.security" },
    { id: 15, src: settings_light, altKey: "apps.settings" },
    { id: 16, src: simcard_light, altKey: "apps.sim" },
    { id: 17, src: simpsons2, altKey: "apps.simpsons" },
  ]



  return (
    <>
      <section id="apps" className="container-appsDescription">

        <div className="contain-appsDescription">
          <div className="box-grid-appsDescription">
            <h2>{t("home.apps.title")}</h2>

            <br />

            <p>
              {t("home.apps.description")}
            </p>

            {ContentImage.map(v => (
              <div key={v.id} className="grid-app-appsDescription" onMouseEnter={() => setOptionTI(v.id)} onMouseLeave={() => setOptionTI(null)}>
                {optionTI === v.id ? (
                  <div className={`contain-image-appsDescription ${optionTI ? "in" : "out"}`}>
                    <img src={v.src} alt={t(v.altKey)} /> 
                  </div>
                  ) : (
                    <span className={optionTI === v.id ? "out" : "in"}>
                      {t(v.altKey)}
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