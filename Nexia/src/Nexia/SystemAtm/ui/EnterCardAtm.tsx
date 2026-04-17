/* Hooks */
import { useEffect, useState } from "react"



/* Enter card on the right side */
export const EnterCardAtm = ({ enterCard }: { enterCard: boolean}) => {
  const [active, setActive] = useState(false)

  // Timer to toggle the light
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(enterCard)
    }, 800)

    return () => clearTimeout(timer)
  }, [enterCard])



  return (
    <>
      <div className="access-card-atm">
        <div className={`light-access-atm ${active ? "green" : "red"}`} />
      </div>

      <div className="border-access-card-atm" />
    </>
  )
}