/* Hooks */
import { useEffect, useState } from "react"

/* Core */
import { AtmBios } from "../core/BiosAtm"

/* Screens */
import { MenuAtm } from "./MenuAtm"
import { LoadingAtm } from "./LoadingAtm"



/* Render screens */
type Phase = "bios" | "loading" | "menu"

type MenuAtmProps = {
  power: boolean,
  enterCard: boolean
  setEnterCard: React.Dispatch<React.SetStateAction<boolean>>
  cardNumber: string
  setCardNumber: (n: string) => void
}

export const ScreenManager = ({
  power,
  enterCard,
  setEnterCard,
  cardNumber,
  setCardNumber,
}: MenuAtmProps) => {
  const [phase, setPhase] = useState<Phase>("bios")
  const [menuVisible, setMenuVisible] = useState(false)

  const [bootDone, setBootDone] = useState<boolean>(() => {
    return localStorage.getItem("atm_boot_done") === "true"
  })


  // Render screens
  useEffect(() => {
    if (bootDone) {
      setMenuVisible(true)
      setPhase("loading")

      const timer = setTimeout(() => setPhase("menu"), 1500)

      return () => clearTimeout(timer)
    } else {
      setPhase("bios")
    }
  }, [bootDone])


  if (!power) return null




  return (
    <>
      <div className="container-screen-atm">

        {/* First render */}
        {phase === "bios" && (
          <AtmBios
            onFinish={() => {
              localStorage.setItem("atm_boot_done", "true")
              setBootDone(true)

              setPhase("loading")

              setTimeout(() => setMenuVisible(true), 500)
              setTimeout(() => setPhase("menu"), 3000)
            }}
          />
        )}


        {/* Second render after to finish bios */}
        {menuVisible && (
          <div className={`box-screen-background-atm ${menuVisible ? "in" : "out"}`}>

            {/* Loading screen */}
            {phase === "loading" && (
              <LoadingAtm />
            )}

            {/* Menu screen */}
            {phase === "menu" && (
              <MenuAtm 
                enterCard={enterCard}
                setEnterCard={setEnterCard}
                cardNumber={cardNumber}
                setCardNumber={setCardNumber}
              />
            )}

          </div>
        )}

      </div>
    </>
  )
}