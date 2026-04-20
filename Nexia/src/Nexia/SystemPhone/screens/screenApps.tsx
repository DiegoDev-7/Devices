/* Hooks */
import { useEffect, useState, type JSX } from "react"

/* Image Apps */
import settings from "../../../assets/Apps/settings_dark.svg"
import calculator from "../../../assets/Apps/calculator.svg"
import calendar from "../../../assets/Apps/calendar.svg"
import folder from "../../../assets/Apps/archive.svg"
import clock from "../../../assets/Apps/clock.svg"
import notes from "../../../assets/Apps/notes.svg"
import cash from "../../../assets/Apps/cash.svg"
import simson from "../../../assets/Apps/simsons2.jpg"
import gallery from "../../../assets/Apps/gallery.svg"
import radio from "../../../assets/Apps/radio.svg"
import rewards from "../../../assets/Apps/rewards.svg"
import security from "../../../assets/Apps/security.svg"
import simcard from "../../../assets/Apps/simcard.svg"
import bank from "../../../assets/Apps/bank.svg"
import message from "../../../assets/Apps/message.svg"
import phone from "../../../assets/Apps/phone.svg"
import contact from "../../../assets/Apps/contact.svg"

/* Apps */
import ScreenButtons from "./screenButtons"
import RadioApp from "../Apps/Radio/RadioApp"
import FolderApp from "../Apps/FolderApp"
import CalculatorApp from "../Apps/CalculatorApp"
import NotesApp from "../Apps/NotesApp"
import SimApp from "../Apps/SimApp"
import PhoneApp from "../Apps/PhoneApp"
import RewardsApp from "../Apps/RewardsApp"
import CashApp from "../Apps/CashApp"
import BankApp from "../Apps/Bank/BankApp"
import MessageApp from "../Apps/MessageApp"
import SecurityApp from "../Apps/SecurityApp"
import PhotoGalleryApp from "../Apps/PhotoGalleryApp"
import ContactApp from "../Apps/ContactApp"
import SettingsApp from "../Apps/Settings/SettingsApp"
import SimpsonsApp from "../Apps/SimpsonsApp"
import CalendarApp from "../Apps/CalendarApp"
import ClockApp from "../Apps/ClockApp"



// Render Screens for selected apps
const Apps = () => {
  type StatusBar = {
    id: string
    src: string
    alt: string
  }
  const StatusBarTop: StatusBar[] = [
    { id: "notes", src: notes, alt: "Notas" },
    { id: "calculator", src: calculator, alt: "Calculadora" },
    { id: "folder", src: folder, alt: "Carpeta" },
    { id: "settings", src: settings, alt: "Ajustes" },
    { id: "clock", src: clock, alt: "Reloj" },
    { id: "calendar", src: calendar, alt: "Calendario" },
    { id: "gallery", src: gallery, alt: "Galeria" },
    { id: "security", src: security, alt: "Seguridad" },
    { id: "rewards", src: rewards, alt: "Rewards" },
    { id: "bank", src: bank, alt: "Banco" },
    { id: "cash", src: cash, alt: "Dinero" },
    { id: "radio", src: radio, alt: "Radio" },
    { id: "simpsons", src: simson, alt: "The Simpsons" },
    { id: "sim", src: simcard, alt: "Sim" },
  ]

  type StatusBar2 = {
    id: string
    classGrid: string
    src: string
    alt: string
  }
  const StatusBarBottom: StatusBar2[] = [
    { id: "message", classGrid: "box-cellPhone-Apps", src: message, alt: "Mensaje" },
    { id: "phone", classGrid: "box-cellPhone-Apps phone", src: phone, alt: "Telefono" },
    { id: "contact", classGrid: "box-cellPhone-Apps", src: contact, alt: "Contacto" },
  ]


  // App rendering upon entering the app
  const appScreens: Record<
    string,
    (onBack: () => void) => JSX.Element
  > = {
    settings: () => <SettingsApp />,
    folder: () => <FolderApp />,
    contact: () => <ContactApp />,
    message: () => <MessageApp />,
    notes: () => <NotesApp />,
    calculator: () => <CalculatorApp />,
    radio: () => <RadioApp />,
    sim: () => <SimApp />,
    phone: () => <PhoneApp />,
    rewards: () => <RewardsApp />,
    cash: () => <CashApp />,
    bank: () => <BankApp />,
    security: () => <SecurityApp />,
    gallery: () => <PhotoGalleryApp />,
    simpsons: () => <SimpsonsApp />,
    calendar: () => <CalendarApp />,
    clock: () => <ClockApp />,
  }


  // Buttons to go back
  type AppKey = keyof typeof appScreens
  const [openApp, setOpenApp] = useState<AppKey | null>(null)
  const [visible, setVisible] = useState(false)


  // Animation open and close App
  useEffect(() => {
    if (openApp) {
      setVisible(false)

      const id = setTimeout(() => {
        setVisible(true)
      }, 1)

      return () => clearTimeout(id)
    }
  }, [openApp])


  const goHome = () => {
    setVisible(false)

    setTimeout(() => {
      setOpenApp(null)
    }, 300)
  }

  const goBack = () => {
    setVisible(false)

    setTimeout(() => {
      setOpenApp(null)
    }, 300)
  }
  

  // If not has account in bank delete Reward App and Cash App
  const hasBank = !!localStorage.getItem("bank_account")
  
  const filteredApps = StatusBarTop.filter(app => {
    if (!hasBank && (app.id === "rewards" || app.id === "cash")) {
      return false
    }

    return true
  })



  return (
    <>

      {/* Screen apps */}
      {openApp ? (
        <div className={`container-apps-screens ${!visible ? "enter" : "exit"}`}>
          {appScreens[openApp](goHome)}
        </div>
      ) : (
        <div className="container-screen-cellPhone-Apps">
          <div className="box-positions-cellPhone-Apps-A">

            {filteredApps.map(v => (
              <div key={v.id} className="box-cellPhone-Apps">
                <button
                  className="button-cellPhone-Apps"
                  onClick={() => setOpenApp(v.id)}
                >
                  <img
                    className="image-cellPhone-Apps"
                    src={v.src}
                    alt={v.alt}
                    draggable={false}
                  />
                  <p className="text-cellPhone-Apps">{v.alt}</p>
                </button>
              </div>
            ))}

          </div>

          <div className="box-positions-cellPhone-Apps-B">

            {StatusBarBottom.map(v => (
              <div
                key={v.id}
                className={v.classGrid}
                onClick={() => setOpenApp(v.id)}
              >
                <button className="button-cellPhone-Apps">
                  <img
                    className="image-cellPhone-Apps"
                    src={v.src}
                    alt={v.alt}
                    draggable={false}
                  />
                </button>
              </div>
            ))}

          </div>
        </div>
      )}


      {/* Virtual buttons */}
      <ScreenButtons
        onBack={goBack}
        onHome={goHome}
      />
      
    </>
  )
}

export default Apps