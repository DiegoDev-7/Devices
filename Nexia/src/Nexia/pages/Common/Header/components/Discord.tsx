/* Hooks */
import { useRef, useState } from "react"

/* Images */
import user_discord from "../../../../../assets/Wallpappers/discord_user.png"

/* Icons */
import { CopyCheck } from "lucide-react"



/* Component discord */
export const DiscordHeader = () => {
  const [active, setActive] = useState(false)
  const [anim, setAnim] = useState<"enter" | "exit">("exit")

  const timeoutRef = useRef<number | null>(null)
  
  
  // Copy user name by discord
  const copyUser = () => {
    navigator.clipboard.writeText("dxvv_7")

    setActive(true)
    setAnim("enter")

    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    
    timeoutRef.current = window.setTimeout(() => {
      setAnim("exit")
      
      setTimeout(() => {
        setActive(false)
      }, 300)
    }, 2000)
  }



  return (
    <div className="overlay-discord" onClick={copyUser}>
      <img src={user_discord} alt="user discord" />

      {active && (
        <span className={anim}>
          <CopyCheck opacity={0.8} color="black" />
        </span>
      )}
    </div>
  )
}