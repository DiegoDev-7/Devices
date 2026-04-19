/* Images */
import { useState } from "react"

/* i18n */
import { useLang } from "../../../i18n/LangContext"

/* Images */
import forwardBack from "../../../assets/Icons/forward_dark.svg"
import eye_open from "../../../assets/Icons/eye.svg"
import eye_close from "../../../assets/Icons/eye_close.svg"

/* ldrs (loading icon) */
import { LoadingIcon } from "../../components/loading.ldrs"

/* Components */
import GoogleRegisterButton from "../components/RegisterButton"
import { TermsPrivacy } from "../components/TermsPrivacy"

/* Services */
import { registerEmail } from "../../services/external/auth/auth.service"
import { createAccountBank } from "../../services/external/bank/bank.service"
import { createAccountAtm } from "../../services/external/atm/atm.service"



/* Render register panel */
type RegisterProps = {
  onBack: () => void
}
export function RegisterPanel({ onBack }: RegisterProps) {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  // Checkbox
  const [createBank, setCreateBank] = useState(false)
  const [createAtm, setCreateAtm] = useState(false)


  // Close the header panel 
  const closePanel = () => {
    setOpen(prev => !prev)

    onBack()
  }



  return (
    <>
      <div className={`register-panel ${open ? "" : "enter"}`}>

        <button className="button-back-register-panel" onClick={closePanel}>
          <img src={forwardBack} alt="Go back" />
        </button>

        <h2 className="register-title">{t("auth.register.title")}</h2>

        {/* Form */}
        <RegisterForm 
          createBank={createBank}
          setCreateBank={setCreateBank}
          createAtm={createAtm}
          setCreateAtm={setCreateAtm}
        />

        <div className="register-divider">
          <span>{t("auth.register.divider")}</span>
        </div>

        <GoogleRegisterButton 
          error={error} 
          setError={setError} 
          loading={loading} 
          setLoading={setLoading} 
        />

      </div>

      <TermsPrivacy />
      
    </>
  )
}



/* Form register */
type Props = {
  createBank: boolean
  setCreateBank: (v: boolean) => void
  createAtm: boolean
  setCreateAtm: (v: boolean) => void
}
function RegisterForm({ createBank, setCreateBank, createAtm, setCreateAtm }: Props) {
  const { t } = useLang()
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
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

      const response = await registerEmail(name, lastName, email, password)

      localStorage.setItem("token", response.token)

      if (createBank) {
        await createAccountBank()
        localStorage.setItem("bank_account", "true")
      }

      if (createAtm) {
        await createAccountAtm()
        localStorage.setItem("atm_account", "true")
      }

      window.location.reload()

    } catch (error: any) {

      setError(error?.message || t("auth.register.error"))
      
    } finally {

      setLoading(false)

    }
  }

  // Handle text and password
  const handleEye = () => {
    setAlter(prev => !prev)
  }

  // Handle checkboxes
  const handleCheckboxBank = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateBank(e.target.checked)
  }
  const handleCheckboxAtm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateAtm(e.target.checked)
  }



  return (
    <>
      <div className="contain-error-register">

        {error && <span className="error">{error}</span>}

      </div>


      <form className="register-form" onSubmit={handleSubmit}>

        <div className="register-row">

          <div className="register-field">
            <label>{t("auth.register.name")}</label>
            <input
              type="text"
              placeholder={t("auth.register.namePlaceholder")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="register-field">
            <label>{t("auth.register.lastname")}</label>
            <input
              type="text"
              placeholder={t("auth.register.lastnamePlaceholder")}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

        </div>

        <div className="register-field">
          <label>{t("auth.register.email")}</label>
          <input
            type="email"
            placeholder={t("auth.register.emailPlaceholder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="register-field">

          <label>{t("auth.register.password")}</label>

          <input
            type={alter ? "text" : "password"}
            placeholder={t("auth.register.passwordPlaceholder")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <img 
            src={alter ? eye_open : eye_close }
            alt={alter ? t("auth.register.show") : t("auth.register.hide")} 
            onClick={handleEye}
          />

        </div>

        <div className="register-options">

          <label className="option">
            <input type="checkbox" checked={createBank} onChange={handleCheckboxBank} />
            {t("auth.register.bankOptional")}
          </label>

          <label className="option">
            <input type="checkbox" checked={createAtm} onChange={handleCheckboxAtm} />
            {t("auth.register.atmOptional")}
          </label>

        </div>

        <label className="terms-check">
          <input type="checkbox" required />
          {t("auth.register.acceptTerms")}
        </label>

        <button className="register-submit">
          {loading ? 
            <LoadingIcon color="white" />
            : 
            t("auth.register.submit")
          }
        </button>

      </form>
    </>
  )
}