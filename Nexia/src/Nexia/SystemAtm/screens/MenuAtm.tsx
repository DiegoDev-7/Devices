/* Hooks */
import { useEffect, useState } from "react"

/* Screens */
import { AuthAtm } from "./AuthAtm"
import { LoadingAtm } from "./LoadingAtm"
import { HomeAtm } from "./HomeAtm"



/* Render screens */
type Phase = "auth" | "transfer" | "leaderboard" | "home" | "history" | "profile" | "loading"
type MenuAtmProps = {
  enterCard: boolean
  setEnterCard: React.Dispatch<React.SetStateAction<boolean>>
  cardNumber: string
  setCardNumber: (n: string) => void
}
export const MenuAtm = ({
  enterCard,
  cardNumber,
}: MenuAtmProps) => {
  const [phase, setPhase] = useState<Phase>("auth")

  const [theme, setTheme] = useState(
    localStorage.getItem("atmTheme") ||
    "linear-gradient(142deg, #0a816bad, #077863e0, #07826bc5, #0b8871b2, #067b658c)"
  )

  // Update background
  useEffect(() => {
    const updateTheme = () => {
      setTheme(
        localStorage.getItem("atmTheme") ||
        "linear-gradient(142deg, #0a816bad, #077863e0, #07826bc5, #0b8871b2, #067b658c)"
      )
    }

    window.addEventListener("themeChange", updateTheme)

    return () => window.removeEventListener("themeChange", updateTheme)
  }, [])



  return (
    <>
      <div 
        className="container-screen-atm" 
        style={{ background: theme }}
      >


        {/* First render authentication */}
        {phase === "auth" && (
          <>
            <AuthAtm 
              enterCard={enterCard}
              cardNumber={cardNumber}
              onSuccess={() => {
                setPhase("loading")

                setTimeout(() => {
                  setPhase("home")
                }, 3000)
              }}
            />
          </>
        )}


        {/* Second render loader */}
        {phase === "loading" && (
          <LoadingAtm />
        )}


        {/* Third render  */}
        {phase === "home" && (
          <HomeAtm />
        )}


      </div>
    </>
  )
}