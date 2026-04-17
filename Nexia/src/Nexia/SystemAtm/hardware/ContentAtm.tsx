/* Hooks */
import { useEffect, useState } from "react"

/* Screens */
import { ScreenManager } from "../screens/ScreenManager"



/* Render screen */
type MenuAtmProps = {
  enterCard: boolean
  setEnterCard: React.Dispatch<React.SetStateAction<boolean>>
  cardNumber: string
  setCardNumber: (n: string) => void
}
export const ContentAtm = ({
  enterCard,
  setEnterCard,
  cardNumber,
  setCardNumber,
}: MenuAtmProps) => {
  const [power, setPower] = useState(false)


  // Turn on screen
  useEffect(() => {
    const powerOn = setTimeout(() => {
      setPower(true)
    }, 3500)

    return () => clearTimeout(powerOn)
  }, [])



  return (
    <>
      <div className="display-atm">
        <div className="screen-atm-touch">

          <div className={`screen-atm-open ${power ? "on" : ""}`}>

            <ScreenManager 
              power={power}
              enterCard={enterCard}
              setEnterCard={setEnterCard}
              cardNumber={cardNumber}
              setCardNumber={setCardNumber}
            />

          </div>
          
        </div>
      </div>
    </>
  )
}