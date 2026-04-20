/* Hooks */
import { useEffect, useState } from "react"

/* Services */
import { getUserById } from "../../services/external/user/user.service"

/* Components */
import { LoadingIcon } from "../../components/loading.ldrs"



/* Render configuration */
export const ConfigurationPanel = () => {
  const gradients = [
    "linear-gradient(142deg, #061a17, #0a2b25, #0e3d34, #135045, #176457)",
    "linear-gradient(142deg, #0a0f2c, #0c1a3a, #0f2550, #123066, #153b7d)",
    "linear-gradient(142deg, #2a0a12, #3a0c18, #501021, #66142a, #7d1833)",
    "linear-gradient(142deg, #2c240a, #3a300c, #50420f, #665516, #7d6a1d)",
    "linear-gradient(142deg, #1a0a2c, #250c3a, #330f50, #411266, #50157d)",
    "linear-gradient(142deg, #0a2a2c, #0c3a3d, #0f5054, #12666c, #157d85)",
    "linear-gradient(142deg, #2c140a, #3a1c0c, #50260f, #663116, #7d3d1d)",
    "linear-gradient(142deg, #1e2c0a, #283a0c, #36500f, #456616, #557d1d)"
  ]

  // Get user
  const [user, setUser] = useState<any>(null)

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


  // Set theme
  const handleSetTheme = (gradient: string) => {
    localStorage.setItem("atmTheme", gradient)
    window.dispatchEvent(new Event("themeChange"))
  }


  const isGoogleUser = user?.provider === "google"



  return (
    <div className="cfg">
      <div className="cfg__container">


        {/* Profile */}
        <div className="cfg__card">
        {!user ? (
          <LoadingIcon color="white" />
        ) : isGoogleUser ? (
          <>
            <h2>Perfil</h2>

            <div className="box-profile-google">
              <img src={user?.avatar} alt="Perfil de usuario" />
            
              <p>{user?.name} {user?.lastname}</p>
              <p>{user?.email}</p>
            </div>
          </>
        ) : (
          <>
            <h2>Perfil</h2>

            <p>Nombre: {user?.name} {user?.lastname}</p>
            <p>Correo: {user?.email}</p>
            <p>Télefono: {user?.phone}</p>
          </>
        )}
        </div>


        {/* Theme */}
        <div className="cfg__card">
          <h2>Temas</h2>

          <div className="cfg__colors">
            {gradients.map((g, i) => (
              <div
                key={i}
                className="cfg__color"
                style={{ background: g }}
                onClick={() => handleSetTheme(g)}
              />
            ))}
          </div>
        </div>


        {/* Alert Error */}
        {error && (
          <div className={`error-update ${exitError ? "exit" : ""}`}>
            {errorMsg}
          </div>
        )}

      </div>
    </div>
  )
}