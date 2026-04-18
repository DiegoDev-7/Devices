/* Hooks */
import { useEffect, useState } from "react"

/* Images */
import forward from "../../../../../assets/Icons/forward_dark.svg"

/* Back Button */
import { BackButton } from "../ui/BackButton"
import { getUserById } from "../../../../services/external/user/user.service"



/* User in phone settings */
/* Twelveth option in the settings */
export const User = ({ back }: any) => {
  type DescriptionOptions = {
    id: number
    text: string
    option: string
  }
  const Description: DescriptionOptions[] = [
    { id: 1, text: "Seguridad de la cuenta", option: "security" },
    { id: 2, text: "Nexia Cloud", option: "cloud" },
    { id: 3, text: "Sobre mi cuenta Nexia", option: "account-nexia" },
  ]

  // User data
  const [user, setUser] = useState<any>(null)

  // Error message
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [error, setError] = useState(false)
  const [exitError, setExitError] = useState(false)


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


  // Remove item in localStorage
  const removeSesion = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("notes")
    localStorage.removeItem("atm_boot_done")
    localStorage.removeItem("bank_account")
    localStorage.removeItem("privacity_option")
    localStorage.removeItem("wallpapper")
    localStorage.removeItem("atmTheme")

    window.location.reload()
  }



  return (
    <>
      <div className="contain-user">
        
        <BackButton back={back} text="Cuenta Nexia" />

        <div className="box-content-user">

          <div className="box-content-account-user">

            {user && (
              <div className="card-button-account-user">

                <div className="card-box-account-user-a">
                  <img src={user?.avatar} alt="Imagen de perfil" />
                </div>

                <div className="card-box-account-user-b">
                  <p>{user?.name} {user?.lastname}</p>
                  <p>{user?.email}</p>
                </div>

              </div>
            )}

          </div>


          <hr className="divisor-user" />


          <div className="box-options-account-user">

            <p className="title-options-user">Mi cuenta</p>

            {Description.map(v => (
              <button key={v.id} className="card-option-button-acount-user">
                <div className="option-text-account-user">
                  <p>{v.text}</p>
                </div>
                <div className="option-image-account-user">
                  <img src={forward} alt="Icono de flecha" />
                </div>
              </button>
            ))}

          </div>
          
          <hr className="divisor-user" />

          <div className="box-logout-account-user">
            <button onClick={removeSesion}>
              Cerrar sesión
            </button>
          </div>

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