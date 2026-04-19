/* Hooks */
import { useState } from "react"
import { useLang } from "../../../i18n/LangContext"
import { sendSupport } from "../../services/external/support/support.service"



/* Support option */
export default function Support() {
  const { t } = useLang()
  const [copy, setCopy] = useState(false)

  // Send data
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  // Success send data
  const [success, setSuccess] = useState(false)
  const [visible, setVisible] = useState(false)

  // Error creating account
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [error, setError] = useState(false)
  const [exitError, setExitError] = useState(false)


  // Send email
  const sendEmail = async () => {
    try {

      if (!name.trim() || !email.trim() || !message.trim()) return 

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) return


      await sendSupport(name, email, message)

      setName("")
      setEmail("")
      setMessage("")


      setSuccess(true)
      setVisible(false)

      // Enter animation success
      setTimeout(() => setVisible(true), 2000)
      
      // Delete animation success
      setTimeout(() => setSuccess(false), 2300)

    } catch (error: any) {

      const message = 
        error?.response?.data?.message || 
        error?.response?.data?.error || 
        error?.message || 
        t("auth.support.errorMessage")

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


  /* Copy email */
  const copyEmail = () => {
    navigator.clipboard.writeText("dxvvdev@gmail.com")

    setCopy(true)

    setTimeout(() => {
      setCopy(prev => !prev)
    }, 1000)
  }



  return (
    <div className="container-settings-section">
      <div className="panel-section support-section">

        <h2>{t("auth.support.title")}</h2>

        <p className="support-description">
          {t("auth.support.description")}
        </p>

        <form 
          className="support-form"
          onSubmit={(e) => {
            e.preventDefault()
            sendEmail()
          }}
        >

          <input
            type="text"
            placeholder={t("auth.support.fullName")}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder={t("auth.support.email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder={t("auth.support.message")}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button type="submit">
            {t("auth.support.send")}
          </button>

        </form>

        <div className="support-divider">
          <span>{t("auth.support.divider")}</span>
        </div>

        <div className={`support-mail ${copy ? "green" : ""}`}>

          <div className="support-mail-info">
            <span>{t("auth.support.supportEmail")}</span>
            <p>dxvvdev@gmail.com</p>
          </div>

          <button
            className={`support-copy ${copy ? "green" : ""}`}
            onClick={copyEmail}
          >
            {copy ? t("auth.support.copied") : t("auth.support.copy")}
          </button>

        </div>

      </div>


      {/* Success update */}
      {success && (
        <span className={`success-atm ${visible ? "exit" : ""}`}>
          ✔
        </span>
      )}

      {error && (
        <div className={`error-atm ${exitError ? "exit" : ""}`}>
          {errorMsg}
        </div>
      )}
      
    </div>
  )
}