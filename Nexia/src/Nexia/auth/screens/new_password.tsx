/* Hooks */
import { useState } from "react"

/* i18n */
import { useLang } from "../../../i18n/LangContext"

/* Images */
import eye from "../../../assets/Icons/eye.svg"
import eye_close from "../../../assets/Icons/eye_close.svg"

/* Services */
import { resetPassword } from "../../services/external/user/user.service"



/* Reset password screen */
export const ResetPasswordScreen = ({
  email,
  code,
  onFinish
}: {
  email: string
  code: string
  onFinish: () => void
}) => {
  const { t } = useLang()
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  // Toggle input
  const [showPassword, setShowPassword] = useState(false)


  const handleReset = async () => {
    try {

      setLoading(true)

      setError("")

      await resetPassword(email, code, password)

      onFinish()

    } catch (error: any) {

      setError(error?.response?.data?.message || error?.response?.data?.error || error?.message || "Error")

    } finally {

      setLoading(false)

    }
  }

  return (
    <div className="reset-container">
      <h2>{t("auth.reset.newPassword.title")}</h2>

      <div className="box-update-password">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={t("auth.reset.newPassword.placeholder")}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={() => setShowPassword(prev => !prev)}>
          <img 
            src={showPassword ? eye : eye_close} 
            alt="Cambiar vista" 
          />
        </button>
      </div>

      <div className={error ? "contain-error-reset-password" : ""}>
        {error && <span className="error">{error}</span>}
      </div>

      <button onClick={handleReset} disabled={loading}>
        {loading ? t("auth.reset.newPassword.changing") : t("auth.reset.newPassword.submit")}
      </button>
    </div>
  )
}