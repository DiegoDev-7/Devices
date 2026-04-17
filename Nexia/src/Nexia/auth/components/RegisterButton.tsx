/* Auth0 */
import { useAuth0 } from "@auth0/auth0-react"

/* Images */
import google from "../../../assets/Apps/google.svg"

/* Components */
import { LoadingIcon } from "../../components/loading.ldrs"

/* Services */
import { registerGoogle } from "../../services/external/auth/auth.service"



/* Button google register */
type Props = {
  error: string,
  setError: (msg: string) => void,
  loading: any,
  setLoading: (value: boolean) => void
}
export default function GoogleRegisterButton({ error, setError, loading, setLoading }: Props) {

  const { loginWithPopup, getIdTokenClaims } = useAuth0()


  // Register user
  const handleRegister = async () => {

    setLoading(true)
    setError("")

    try {

      await loginWithPopup({
        authorizationParams: {
          connection: "google-oauth2",
          screen_hint: "signup",
          prompt: "select_account"
        }
      })

      await new Promise(res => setTimeout(res, 300))

      const claims = await getIdTokenClaims()

      if (!claims?.email || !claims?.sub) {
        setError("No se completó el registro con google")
        return
      }

      const nameParts = (claims.name || "").split(" ")

      const response = await registerGoogle(
        nameParts[0],
        nameParts[1] || "",
        claims.email || "",
        claims.sub || "",
        claims.picture
      )

      localStorage.setItem("token", response.token)

      window.location.reload()
      
    } catch (error: any) {

      // Cancel automatic login when closing the registration tab
      if (error.error === "popup_closed") return
      
      setError(error.response?.data?.error || "Error al iniciar sesión con google")

      return
      
    } finally {

      setLoading(false)

    }

  }

  

  return (
    <>

      <div className="container-google-register">

        <button onClick={handleRegister} className="google-register-btn">

          {loading ? 
            <LoadingIcon color="black" /> 
            :
            <>
              <img src={google} alt="Google" />
    
              <span>Crear cuenta con Google</span>
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