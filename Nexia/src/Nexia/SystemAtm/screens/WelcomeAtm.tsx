/* Hooks */
import { useEffect, useState } from "react"

/* Images */
import nexia from "../../../assets/Nexia/NexiaWhite.svg"

/* Services */
import { getUserById } from "../../services/external/user/user.service"



/* Render welcome */
type userProps = {
  name: string
  lastname: string
}
export const WelcomePanel = () => {
  const [user, setUser] = useState<userProps | null>(null)
  
  // Error message
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [error, setError] = useState(false)
  const [exitError, setExitError] = useState(false)
  

  // Get user
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
    <>
      <div className="container-welcome-atm">
        
        <div className="box-image-welcome-atm">
          <img src={nexia} alt="Nexia logo" />
        </div>
        
        <div className="box-text-welcome-atm">
          <span>¡Bienvenid@ de nuevo, {user?.name} {user?.lastname}!</span>
        </div>


        {/* Alert Error */}
        {error && (
          <div className={`error-update ${exitError ? "exit" : ""}`}>
            {errorMsg}
          </div>
        )}
      </div>
    </>
  )
}