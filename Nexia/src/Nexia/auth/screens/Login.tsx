/* Images */
import { useState } from "react"

/* Images */
import forwardBack from "../../../assets/Icons/forward_dark.svg"
import eye_open from "../../../assets/Icons/eye.svg"
import eye_close from "../../../assets/Icons/eye_close.svg"

/* Login button */
import GoogleLoginButton from "../components/LoginButton"

/* Common */
import { TermsPrivacy } from "../components/TermsPrivacy"

/* Services */
import { loginEmail } from "../../services/external/auth/auth.service"

/* ldrs (loading icon) */
import { LoadingIcon } from "../../components/loading.ldrs"
import { getBank } from "../../services/external/bank/bank.service"



/* Panel login */
type LoginProps = {
  onBack: () => void
}
export function LoginPanel({ onBack }: LoginProps) {
  const [open, setOpen] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  // Close the header panel
  const closePanel = () => {
    setOpen(prev => !prev)

    onBack()
  }


  
  return (
    <>
      <div className={`login-panel ${open ? "" : "enter"}`}>

        <button className="button-back-panel" onClick={closePanel}>
          <img src={forwardBack} alt="Go back" />
        </button>

        <h2 className="login-title">Iniciar sesion</h2>

        {/* Form */}
        <LoginForm />

        <button className="login-recover">
          ¿Olvidaste tu contraseña?
        </button>

        <div className="login-divider">
          <span>o</span>
        </div>

        {/* Login button */}
        <GoogleLoginButton error={error} setError={setError} loading={loading} setLoading={setLoading} />

      </div>

      <TermsPrivacy />

    </>
  )
}



/* Login form */
function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // Button
  const [alter, setAlter] = useState(false)

  // Error and loading
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")


  // Send api for create user
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {

      await loginEmail(email, password)

      try {

        const bank = await getBank()

        if (bank) {
          localStorage.setItem("bank_account", "true")
        }
        
      } catch (error: any) {
        
        if (error.message === "Bank not created") {
          localStorage.removeItem("bank_account")
        } else {
          throw error
        }
        
      }

    } catch (error: any) {

      setError(error.response?.data?.message || "Error al iniciar sesión")
      
    } finally {

      setLoading(false)

    }
  }

  // Handle text and password
  const handleEye = () => {
    setAlter(prev => !prev)
  }



  return (
    <>
      <div className={error ? "contain-error-login" : ""}>

        {error && <span className="error">{error}</span>}

      </div>


      <form className="login-form" onSubmit={handleSubmit}>

        <div className="login-field">
          <label>Correo</label>
          <input
            type="email"
            placeholder="correo@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="login-field">

          <label>Contraseña</label>

          <input
            type={alter ? "text" : "password"}
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <img 
            src={alter ? eye_open : eye_close }
            alt={alter ? "Ver" : "Cerrar" } 
            onClick={handleEye} 
          />

        </div>

        <button className="login-submit">
          {loading ? <LoadingIcon color="white" /> : "Acceder"}
        </button>

      </form>
    </>
  )
}