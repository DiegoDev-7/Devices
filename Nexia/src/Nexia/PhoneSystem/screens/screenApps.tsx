/* Hooks */
import { useState, type JSX } from "react"

/* Image Apps */
import settings from "../../../assets/Apps/settings_dark.svg"
import calculator from "../../../assets/Apps/calculator.svg"
import weater from "../../../assets/Apps/weather.svg"
import calendar from "../../../assets/Apps/calendar.svg"
import folder from "../../../assets/Apps/folder.svg"
import music from "../../../assets/Apps/music.svg"
import notes from "../../../assets/Apps/notes.svg"
import cash from "../../../assets/Apps/cash.svg"
import chat from "../../../assets/Apps/chat.svg"
import gallery from "../../../assets/Apps/gallery.svg"
import radio from "../../../assets/Apps/radio.svg"
import rewards from "../../../assets/Apps/rewards.svg"
import security from "../../../assets/Apps/security.svg"
import simcard from "../../../assets/Apps/simcard.svg"
import sudoku from "../../../assets/Apps/sudoku.svg"
import tictactoe from "../../../assets/Apps/tic-tac-toe.svg"
import message from "../../../assets/Apps/message.svg"
import phone from "../../../assets/Apps/phone.svg"
import contact from "../../../assets/Apps/contact.svg"

/* Apps */
import RadioApp from "../Apps/RadioApp"
import FolderApp from "../Apps/FolderApp"
import CalculatorApp from "../Apps/CalculatorApp"
import ScreenButtons from "./screenButtons"
import Notes from "../Apps/NotesApp"



/* Render Screens for selected apps */
const Apps = () => {
  type StatusBar = {
    id: string
    classGrid: string
    buttonApp: string
    classText: string
    classImage: string
    imageApp: string
    alt: string
  }
  const StatusBarCss: StatusBar[] = [
    { id: "notes", classGrid: "box-cellPhone-Apps", buttonApp: "button-cellPhone-Apps", classText: "text-cellPhone-Apps", classImage:"image-cellPhone-Apps", imageApp: notes, alt: "Notas" },
    { id: "calculator", classGrid: "box-cellPhone-Apps", buttonApp: "button-cellPhone-Apps", classText: "text-cellPhone-Apps", classImage:"image-cellPhone-Apps", imageApp: calculator, alt: "Calculadora" },
    { id: "weater", classGrid: "box-cellPhone-Apps", buttonApp: "button-cellPhone-Apps", classText: "text-cellPhone-Apps", classImage:"image-cellPhone-Apps", imageApp: weater, alt: "Clima" },
    { id: "settings", classGrid: "box-cellPhone-Apps", buttonApp: "button-cellPhone-Apps", classText: "text-cellPhone-Apps", classImage:"image-cellPhone-Apps", imageApp: settings, alt: "Ajustes" },
    { id: "music", classGrid: "box-cellPhone-Apps", buttonApp: "button-cellPhone-Apps", classText: "text-cellPhone-Apps", classImage:"image-cellPhone-Apps", imageApp: music, alt: "Musica" },
    { id: "folder", classGrid: "box-cellPhone-Apps", buttonApp: "button-cellPhone-Apps", classText: "text-cellPhone-Apps", classImage:"image-cellPhone-Apps", imageApp: folder, alt: "Carpeta" },
    { id: "calendar", classGrid: "box-cellPhone-Apps", buttonApp: "button-cellPhone-Apps", classText: "text-cellPhone-Apps", classImage:"image-cellPhone-Apps", imageApp: calendar, alt: "Calendario" },
    { id: "gallery", classGrid: "box-cellPhone-Apps", buttonApp: "button-cellPhone-Apps", classText: "text-cellPhone-Apps", classImage:"image-cellPhone-Apps", imageApp: gallery, alt: "Galeria" },
    { id: "cash", classGrid: "box-cellPhone-Apps", buttonApp: "button-cellPhone-Apps", classText: "text-cellPhone-Apps", classImage:"image-cellPhone-Apps", imageApp: cash, alt: "Dinero" },
    { id: "rewards", classGrid: "box-cellPhone-Apps", buttonApp: "button-cellPhone-Apps", classText: "text-cellPhone-Apps", classImage:"image-cellPhone-Apps", imageApp: rewards, alt: "Rewards" },
    { id: "chat", classGrid: "box-cellPhone-Apps", buttonApp: "button-cellPhone-Apps", classText: "text-cellPhone-Apps", classImage:"image-cellPhone-Apps", imageApp: chat, alt: "Chat" },
    
    { id: "radio", classGrid: "box-cellPhone-Apps", buttonApp: "button-cellPhone-Apps", classText: "text-cellPhone-Apps", classImage:"image-cellPhone-Apps", imageApp: radio, alt: "Radio" },
    { id: "simcard", classGrid: "box-cellPhone-Apps", buttonApp: "button-cellPhone-Apps", classText: "text-cellPhone-Apps", classImage:"image-cellPhone-Apps", imageApp: simcard, alt: "Sim" },
    { id: "security", classGrid: "box-cellPhone-Apps", buttonApp: "button-cellPhone-Apps", classText: "text-cellPhone-Apps", classImage:"image-cellPhone-Apps", imageApp: security, alt: "Seguridad" },
    { id: "sudoku", classGrid: "box-cellPhone-Apps", buttonApp: "button-cellPhone-Apps", classText: "text-cellPhone-Apps", classImage:"image-cellPhone-Apps", imageApp: sudoku, alt: "Sudoku" },
    { id: "tictactoe", classGrid: "box-cellPhone-Apps", buttonApp: "button-cellPhone-Apps", classText: "text-cellPhone-Apps", classImage:"image-cellPhone-Apps", imageApp: tictactoe, alt: "Tic Tac Toe" },
  ]

  type StatusBar2 = {
    id: string
    classGrid: string
    buttonApp: string
    classImage: string
    imageApp: string
    alt: string
  }
  const StatusBarCss2: StatusBar2[] = [
    { id: "message", classGrid: "box-cellPhone-Apps", buttonApp: "button-cellPhone-Apps", classImage:"image-cellPhone-Apps", imageApp: message, alt: "Mensaje" },
    { id: "phone", classGrid: "box-cellPhone-Apps", buttonApp: "button-cellPhone-Apps", classImage:"image-cellPhone-Apps", imageApp: phone, alt: "Telefono" },
    { id: "contact", classGrid: "box-cellPhone-Apps", buttonApp: "button-cellPhone-Apps", classImage:"image-cellPhone-Apps", imageApp: contact, alt: "Contacto" },
  ]


  

  


  const appScreens: Record<
    string,
    (onBack: () => void) => JSX.Element
  > = {
    notes: onBack => <Notes onBack={onBack} />,
    calculator: onBack => <CalculatorApp onBack={onBack} />,
    radio: onBack => <RadioApp onBack={onBack} />,
    folder: onBack => <FolderApp onBack={onBack} />,
  }



  const [openApp, setOpenApp] = useState<string | null>(null)

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
          {appScreens[openApp]?.(goHome) ?? (
            <>

            </>
          )}
        </div>
      ) : (
        <div className="container-screen-cellPhone-Apps">
          <div className="box-positions-cellPhone-Apps-A">
            {StatusBarCss.map(v => (
              <div key={v.id} className={v.classGrid}>
                <button
                  className={v.buttonApp}
                  onClick={() => setOpenApp(v.id)}
                >
                  <img
                    className={v.classImage}
                    src={v.imageApp}
                    alt={v.alt}
                    draggable={false}
                  />
                  <p className={v.classText}>{v.alt}</p>
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
                <button className={v.buttonApp}>
                  <img
                    className={v.classImage}
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