
import { useAuth0 } from "@auth0/auth0-react"

/* i18n */
import { useLang } from "../../../i18n/LangContext"

/* Services */
import { loginGoogle } from "../../services/external/auth/auth.service"

/* Images */
import google from "../../../assets/Apps/google.svg"

/* ldrs (loading icon) */
import { LoadingIcon } from "../../components/loading.ldrs"
import { getBank } from "../../services/external/bank/bank.service"



/* Button google login */
type Props = {
  error: string,
  setError: (msg: string) => void,
  loading: any,
  setLoading: (value: boolean) => void
}
export default function GoogleLoginButton({ error, setError, loading, setLoading }: Props) {

  const { loginWithPopup, user, isAuthenticated } = useAuth0()
  const { t } = useLang()

  
  // Login user
  const handleLogin = async () => {
    setLoading(true)
    setError("")

    try {

      await loginWithPopup({
        authorizationParams: {
          connection: "google-oauth2"
        }
      })

      if (!isAuthenticated || !user) return

      const response = await loginGoogle(
        user.name || "",
        user.email || "",
        user.sub || "",
        user.picture || ""
      )

      localStorage.setItem("token", response.token)

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

      setError(error.response?.data?.error || t("auth.components.loginButton.error"))
      
    } finally {

      setLoading(false)

    }
    
  }

  

  return (
    <>
      <div className="container-google-login">

        <button onClick={handleLogin} className="google-login-btn">

          {loading ? 
            <LoadingIcon color="black" /> 
            :
            <>
              <img src={google} alt="Google" />

              <span>{t("auth.components.loginButton.continueGoogle")}</span>
            </>
          }

        </button>

      </div>

      <div className={error ? "contain-error-login" : ""}>
        {error && <span className="error">{error}</span>}
      </div>
    </>
  )
}