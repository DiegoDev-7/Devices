/* Hooks */
import { useEffect, useState } from "react"

/* Images */
import simcard from "../../../assets/Apps/simcard_light.svg"
import infoDark from "../../../assets/Icons/info_dark.svg"



/* Render */
type Props = {
  onBack: () => void
}
const SimApp = ({ onBack }: Props) => {
  const [num, setNum] = useState<boolean>(false)
  const [random, setRandom] = useState(0)
  
  const [info, setInfo] = useState<boolean>(false)


  const viewNum = () => {
    setNum(!num)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRandom(Math.floor(Math.random() * 12345678910))
    }, 1000)

    return () => clearTimeout(timeout)
  }, [])


  /* Handle view info to view text */
  const handleViewInfo = () => {
    setInfo(!info)
  }

  

  return (
    <>
      <div className="Container-app-screen-simcard">
        <button className="contain-image-app-simcard" onClick={viewNum}>

          <div className="box-image-app-simcard">

            <img className="image-app-simcard" src={simcard} alt="simcard" />

          </div>

        </button>

        {num ? (
          <>
            <div className="contain-number-app-simcard">
              <p className="text-number-app-simcard">Numero telefónico</p>
              <p className="text-number-app-simcard">
                {random}
              </p>
            </div> 
          </>
          ) : (
            <>
              <button className="contain-app-simcard-info" onMouseEnter={handleViewInfo} onMouseOut={handleViewInfo}>
                <img className="image-app-simcard-info" src={infoDark} alt="information" />
              </button>

              {info && (
                <>
                  <div className="contain-app-info">
                    <p>Para ver tu número teléfonico haz click encima de la tarjeta sim. Este número lo puede utilizar para hablar con otras personas.</p>
                  </div>
                </>
              )}
            </>
          )
        }
      </div>
    </>
  )
}

export default SimApp