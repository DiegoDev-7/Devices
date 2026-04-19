/* Images */
import { useState } from "react"

/* i18n */
import { useLang } from "../../../i18n/LangContext"

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
import { ResetFlow } from "../sections/ResetFlow"
import { getBank } from "../../services/external/bank/bank.service"



/* Panel login */
type LoginProps = {
  onBack: () => void
}
export function LoginPanel({ onBack }: LoginProps) {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  // control reset flow
  const [showReset, setShowReset] = useState(false)

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

        {!showReset ? (
          <>
            <h2 className="login-title">{t("auth.login.title")}</h2>

            {/* Form */}
            <LoginForm />

            <button 
              className="login-recover"
              onClick={() => setShowReset(true)}
            >
              {t("auth.login.forgotPassword")}
            </button>

            <div className="login-divider">
              <span>{t("auth.login.divider")}</span>
            </div>

            {/* Login button */}
            <GoogleLoginButton 
              error={error} 
              setError={setError} 
              loading={loading} 
              setLoading={setLoading} 
            />
          </>
        ) : (
          <ResetFlow onExit={() => setShowReset(false)} />
        )}

      </div>

      <TermsPrivacy />

    </>
  )
}



/* Login form */
function LoginForm() {
  const { t } = useLang()
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
    
    if (loading) return

    setLoading(true)
    setError("")

    try {

      const data = await loginEmail(email, password)

      localStorage.setItem("token", data.token)

      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user))
      }

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

      window.location.reload()

    } catch (error: any) {

      setError(error?.response?.data?.message || error?.response?.data?.error || error?.message || t("auth.login.error"))
      
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
          <label>{t("auth.login.email")}</label>
          <input
            type="email"
            placeholder={t("auth.login.emailPlaceholder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="login-field">

          <label>{t("auth.login.password")}</label>

          <input
            type={alter ? "text" : "password"}
            placeholder={t("auth.login.passwordPlaceholder")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <img 
            src={alter ? eye_open : eye_close }
            alt={alter ? t("auth.login.show") : t("auth.login.hide")} 
            onClick={handleEye} 
          />

        </div>

        <button className="login-submit">
          {loading ? <LoadingIcon color="white" /> : t("auth.login.submit")}
        </button>

      </form>
    </>
  )
}