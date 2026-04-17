/* Hooks */
import { useEffect, useState } from "react"

/* Lucide-react icons */
import { History, Trophy, Send, Settings, BadgeInfo } from "lucide-react"

/* Services */
import { getUserById } from "../../services/external/user/user.service"

/* Screen Panels */
import { TransfersPanel } from "./TransfersAtm/TransfersAtm"
import { HistoryPanel } from "./HistoryAtm"
import { WelcomePanel } from "./WelcomeAtm"
import { LeaderboardPanel } from "./leaderboard/Leaderboard"
import { InformationPanel } from "./InformationAtm"
import { ConfigurationPanel } from "./ConfigurationAtm"



/* Render home */
type Section = "welcome" | "history" | "leaderboard" | "transfers" | "settings" | "BadgeInfo" | "bank" | "user"
type UserData = {
  name: string
  lastname: string
  email: string
  avatar: string | null
  phone: string
}
export const HomeAtm = () => {
  // Config to views
  const [view, setView] = useState<Section>("welcome")
  const [user, setUser] = useState<UserData | null>(null)
  const [viewUser, setViewUser] = useState(true)
  const [active, setActive] = useState(true)

  // Error message
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [error, setError] = useState(false)
  const [exitError, setExitError] = useState(false)


  
  // Change view
  const handleSelect = (section: Section) => {
    setView(section)
  }

  // Toggle view
  const toggleViewUser = () => {
    setViewUser(prev => !prev)
  }


  // Get user data
  const fetchUser = async () => {
    try {
      
      const res = await getUserById()

      setUser(res.data)
      
    } catch (error: any) {
      
      const message = 
        error?.response?.data?.message || 
        error?.response?.data?.error || 
        error?.message || 
        "Error inesperado"

      setErrorMsg(message)
      setError(true)
      setExitError(false)

      setTimeout(() => setExitError(true), 2000)

      setTimeout(() => {
        setError(false)
        setErrorMsg(null)
      }, 2300)
      
    }
  }
  useEffect(() => {
    fetchUser()
  }, [])



  return (
    <div className="atm-ui">


      {/* User information */}
      <div className={`atm-user ${viewUser ? "in" : "out"}`}>
        {!viewUser ? (
          <>          
            <div className="atm-user-avatar">
              {user?.avatar ? (
                <img src={user.avatar} alt="Imagen de perfil" />
              ) : (
                <span>
                  {user?.name[0]}{user?.lastname[0]}
                </span>
              )}
            </div>

            <div className="atm-user-data">
              <strong>{user?.name} {user?.lastname}</strong>
              <span>{user?.email}</span>
              <span>{user?.phone}</span>
            </div>
          </>
        ) : ""}

        <button className="button-show-user" onClick={toggleViewUser} />
      </div>


      {/* Render screens */}
      <div className="atm-content">
        {view === "welcome" && <WelcomePanel /> }

        {view === "transfers" && <TransfersPanel /> }
        {view === "history" && <HistoryPanel /> }
        {view === "settings" && <ConfigurationPanel /> }
        {view === "leaderboard" && <LeaderboardPanel /> }
        {view === "BadgeInfo" && <InformationPanel /> }
      </div>


      {/* Navegator dock */}
      <div className="atm-dock" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
        {active ? (
          <>  
            <button className={`dock-item ${view === "transfers" ? "active" : ""}`} onClick={() => handleSelect("transfers")}>
              <Send size={22} />
            </button>

            <button className={`dock-item ${view === "history" ? "active" : ""}`} onClick={() => handleSelect("history")}>
              <History size={22} />
            </button>

            <button className={`dock-item ${view === "settings" ? "active" : ""}`} onClick={() => handleSelect("settings")}>
              <Settings size={22} />
            </button>

            <button className={`dock-item ${view === "leaderboard" ? "active" : ""}`} onClick={() => handleSelect("leaderboard")}>
              <Trophy size={22} />
            </button>

            <button className={`dock-item ${view === "BadgeInfo" ? "active" : ""}`} onClick={() => handleSelect("BadgeInfo")}>
              <BadgeInfo size={22} />
            </button>
          </>
        ): <div style={{ width: "75%", height: "3px", borderRadius: "25px", background: "gray" }} />}

      </div>

      {/* Alert Error */}
      {error && (
        <div className={`error-update ${exitError ? "exit" : ""}`}>
          {errorMsg}
        </div>
      )}

    </div>
  )
}