/* Hooks */
import { useState, type JSX } from "react"

/* Image Apps */
import settings from "../../../assets/Apps/settings_dark.svg"
import calculator from "../../../assets/Apps/calculator.svg"
import weater from "../../../assets/Apps/weather.svg"
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
import tictactoe from "../../../assets/Apps/tic-tac-toe.svg"
import message from "../../../assets/Apps/message.svg"
import phone from "../../../assets/Apps/phone.svg"
import contact from "../../../assets/Apps/contact.svg"

/* Apps */
import ScreenButtons from "./screenButtons"
import RadioApp from "../Apps/RadioApp"
import FolderApp from "../Apps/FolderApp"
import CalculatorApp from "../Apps/CalculatorApp"
import NotesApp from "../Apps/NotesApp"
import SimApp from "../Apps/SimApp"
import PhoneApp from "../Apps/PhoneApp"
import RewardsApp from "../Apps/RewardsApp"
import CashApp from "../Apps/CashApp"
import BankApp from "../Apps/BankApp"
import MessageApp from "../Apps/MessageApp"
import SecurityApp from "../Apps/SecurityApp"
import PhotoGalleryApp from "../Apps/PhotoGalleryApp"
import ContactApp from "../Apps/ContactApp"
import SettingsApp from "../Apps/Settings"
import SimpsonsApp from "../Apps/SimpsonsApp"
import CalendarApp from "../Apps/CalendarApp"



/* Render Screens for selected apps */
const Apps = () => {
  type StatusBar = {
    id: string
    imageApp: string
    alt: string
  }
  const StatusBarCss: StatusBar[] = [
    { id: "notes", imageApp: notes, alt: "Notas" },
    { id: "calculator", imageApp: calculator, alt: "Calculadora" },
    { id: "weater", imageApp: weater, alt: "Clima" },
    { id: "settings", imageApp: settings, alt: "Ajustes" },
    { id: "clock", imageApp: clock, alt: "Reloj" },
    { id: "folder", imageApp: folder, alt: "Carpeta" },
    { id: "calendar", imageApp: calendar, alt: "Calendario" },
    { id: "gallery", imageApp: gallery, alt: "Galeria" },
    { id: "cash", imageApp: cash, alt: "Dinero" },
    { id: "rewards", imageApp: rewards, alt: "Rewards" },
    { id: "bank", imageApp: bank, alt: "Banco" },
    { id: "security", imageApp: security, alt: "Seguridad" },
    { id: "simpsons", imageApp: simson, alt: "The Simpsons" },
    
    { id: "radio", imageApp: radio, alt: "Radio" },
    { id: "sim", imageApp: simcard, alt: "Sim" },
    { id: "tictactoe", imageApp: tictactoe, alt: "Tic Tac Toe" },
  ]

  type StatusBar2 = {
    id: string
    classGrid: string
    imageApp: string
    alt: string
  }
  const StatusBarCss2: StatusBar2[] = [
    { id: "message", classGrid: "box-cellPhone-Apps", imageApp: message, alt: "Mensaje" },
    { id: "phone", classGrid: "box-cellPhone-Apps phone", imageApp: phone, alt: "Telefono" },
    { id: "contact", classGrid: "box-cellPhone-Apps", imageApp: contact, alt: "Contacto" },
  ]



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
    calendar: () => <CalendarApp />
  }

  type AppKey = keyof typeof appScreens
  const [openApp, setOpenApp] = useState<AppKey | null>(null)

  const goHome = () => {
    setOpenApp(null)
  }
  const goBack = () => {
    // por ahora ATRAS = volver al launcher
    setOpenApp(null)
  }

  

  return (
    <>
      {/* CONTENIDO */}
      {openApp ? (
        <div className="Container-apps-screens">
          {appScreens[openApp](goHome)}
        </div>
      ) : (
        <div className="container-screen-cellPhone-Apps">
          <div className="box-positions-cellPhone-Apps-A">
            {StatusBarCss.map(v => (
              <div key={v.id} className="box-cellPhone-Apps">
                <button
                  className="button-cellPhone-Apps"
                  onClick={() => setOpenApp(v.id)}
                >
                  <img
                    className="image-cellPhone-Apps"
                    src={v.imageApp}
                    alt={v.alt}
                    draggable={false}
                  />
                  <p className="text-cellPhone-Apps">{v.alt}</p>
                </button>
              </div>
            ))}
          </div>

          <div className="box-positions-cellPhone-Apps-B">
            {StatusBarCss2.map(v => (
              <div
                key={v.id}
                className={v.classGrid}
                onClick={() => setOpenApp(v.id)}
              >
                <button className="button-cellPhone-Apps">
                  <img
                    className="image-cellPhone-Apps"
                    src={v.imageApp}
                    alt={v.alt}
                    draggable={false}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* BOTONES VIRTUALES (SIEMPRE VISIBLES) */}
      <ScreenButtons
        onBack={goBack}
        onHome={goHome}
      />
    </>
  )
}

export default Apps