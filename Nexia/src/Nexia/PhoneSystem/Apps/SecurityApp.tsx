/* Hooks */
import { useEffect, useState } from "react"

/* Images */
import trash from "../../../assets/Icons/trash_dark.svg"
import batery from "../../../assets/Icons/battery_green.svg"
import scaner from "../../../assets/Icons/scaner_light.svg"
import cleaner from "../../../assets/Icons/cleaner_dark.svg"



/* Render */
type Props = {
  onBack: () => void
}
const SecurityApp = ({ onBack }: Props) => {
  /*  */
  let [randomNumber, setRandomNumber] = useState<number>(0)
  let [randomGb, setRandomGb] = useState<number>(0)
  const [activateBttn, setActivateBttn] = useState<boolean>(true)
  const [activateScreen, setActivateScreen] = useState<boolean>(false)
  let textSize: any = randomGb >= 1000 ? `${(randomGb / 1000).toFixed(1)} GB` : `${randomGb} MB`
  

  /*  */
  useEffect(() => {
    const idn = setTimeout(() => {
      setRandomNumber(Math.floor(Math.random() * (60 - 40 + 1)) + 40)
      setRandomGb(Math.floor(Math.random() * 1000 + (1000 - 200)))
    })
    
    return () => clearTimeout(idn)
  }, [])

  /*  */
  const activateButtonClean = () => {
    let value = randomNumber
    let gb = randomGb

    const idRn = setInterval(() => {
      value++
      setRandomNumber(value)

      if (value >= 100) clearInterval(idRn)
    }, 95)

    const idRg = setInterval(() => {
      gb--
      setRandomGb(gb)

      if (gb <= 0) clearInterval(idRg)
    }, 1)
  }

  /*  */
  useEffect(() => {
    if (randomNumber >= 100 && randomGb <= 0) {
      setActivateBttn(false)
      setActivateScreen(true)
    }
  }, [randomNumber, randomGb])



  type SecurityItem = {
    id: number
    imageClass: string
    imageSrc: string
    imageAlt: string
    title: string
    content: string
  }
  const securityItems: SecurityItem[] = [
    {
      id: 1,
      imageClass: "image-security-trash",
      imageSrc: trash,
      imageAlt: "Basura",
      title: "Basura",
      content: `Liberar ${textSize}`,
    },
    {
      id: 2,
      imageClass: "image-security-batery",
      imageSrc: batery,
      imageAlt: "Bateria",
      title: "Bateria",
      content: `Liberar ${textSize}`,
    },
    {
      id: 3,
      imageClass: "image-security-scaner",
      imageSrc: scaner,
      imageAlt: "Escaner",
      title: "Escaner",
      content: `Liberar ${textSize}`,
    },
    {
      id: 4,
      imageClass: "image-security-cleaner",
      imageSrc: cleaner,
      imageAlt: "Limpiador",
      title: "Limpiador",
      content: `Liberar ${textSize}`,
    },
  ]

  return (
    <>
      <div className="Container-app-screen-security">

        <div className="box-app-screen-security-a">
          <div className="cicle-app-screen-security">
            <span className="circle-text-app-screen-security">{randomNumber}%</span>
            
            {activateBttn && (
              <button className="circle-button-app-screen-security" onClick={activateButtonClean}>Analizar</button>
            )}
          </div>
        </div>

        {/*  */}
        <div className="box-app-screen-security-b">
          {securityItems.map(v => (
            <div key={v.id} className="contain-app-screen-security">
              <div className="box-security-trash">
                <img className={v.imageClass} src={v.imageSrc} alt={v.imageAlt} />
              </div>

              <div className="box-security-trash-text">
                <p className="text-tilte-security">{v.title}</p>
                <p className="text-content-security">{v.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/*  */}
        {activateScreen && (
          <div className="invisible-security-complete">
            <div className={`container-screen-security-complete ${activateScreen ? "on" : ""}`}>
              <h2>Escaneo <br /> completado</h2>
              <p>100%</p>
            </div>
          </div>
        )}

      </div>
    </>
  )
}

export default SecurityApp