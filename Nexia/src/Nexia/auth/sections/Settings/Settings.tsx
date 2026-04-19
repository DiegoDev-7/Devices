/* Hooks */
import { useEffect, useState } from "react"

/* i18n */
import { useLang } from "../../../../i18n/LangContext"

/* Services */
import { deleteAccount, updateUserById } from "../../../services/external/user/user.service"

/* Types */
import { type User } from "./types/user.type"



/* Render config account */
const ConfigAccount = ({ user }: { user: User }) => {
  const { t } = useLang()
  const [success, setSuccess] = useState(false)
  const [visible, setVisible] = useState(false)

  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [error, setError] = useState(false)
  const [exitError, setExitError] = useState(false)

  // Form
  const [form, setForm] = useState({
    name: user.name || "",
    lastname: user.lastname || "",
    email: user.email || "",
    password: ""
  })
  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        lastname: user.lastname || "",
        email: user.email || "",
        password: ""
      })
    }
  }, [user])


  // Input values
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }


  // Update profile
  const handleUpdate = async () => {
    try {

      const payload: any = {}

      if (form.name) payload.name = form.name
      if (form.lastname) payload.lastname = form.lastname
      if (form.email) payload.email = form.email
      if (form.password) payload.password = form.password

      await updateUserById(payload)

      setSuccess(true)
      setVisible(false)

      setTimeout(() => setVisible(true), 2000)
      setTimeout(() => setSuccess(false), 2300)

    } catch (error: any) {

      const message =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        error?.message ||
        t("auth.settings.errorMessage")

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


  // Delete account
  const handleDelete = async () => {
    try {

      await deleteAccount()

      localStorage.removeItem("token")
      localStorage.removeItem("notes")
      localStorage.removeItem("atm_boot_done")
      localStorage.removeItem("bank_account")
      localStorage.removeItem("privacity_option")
      localStorage.removeItem("wallpapper")
      localStorage.removeItem("atmTheme")

      setSuccess(true)
      setVisible(false)

      setTimeout(() => setVisible(true), 2000)
      setTimeout(() => setSuccess(false), 2300)

      window.location.reload()

    } catch (error: any) {

      const message =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        error?.message ||
        t("auth.settings.errorMessage")

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

  // Logout
  const removeSesion = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("bank_account")
    window.location.reload()
  }



  return (
    <>
      <div className="panel-section settings-section">

        <h2>{t("auth.settings.title")}</h2>

        <div className="settings-group">

          <h3 className="settings-title">{t("auth.settings.accountInfo")}</h3>

          <div className="settings-row">

            <div className="settings-item">
              <label>{t("auth.settings.name")}</label>
              <input name="name" value={form.name} onChange={handleChange} />
            </div>

            <div className="settings-item">
              <label>{t("auth.settings.lastname")}</label>
              <input name="lastname" value={form.lastname} onChange={handleChange} />
            </div>

          </div>

          <div className="settings-item">
            <label>{t("auth.settings.email")}</label>
            <input name="email" value={form.email} onChange={handleChange} />
          </div>

          <div className="settings-item">
            <label>{t("auth.settings.newPassword")}</label>
            <input name="password" type="password" value={form.password} onChange={handleChange} />
          </div>

          <button className="settings-primary" onClick={handleUpdate}>{t("auth.settings.updateData")}</button>

        </div>

        <div className="settings-group danger-zone">

          <h3 className="settings-title">{t("auth.settings.logout")}</h3>

          <button className="settings-close" onClick={removeSesion}>
            {t("auth.settings.logoutButton")}
          </button>

          <h3 className="settings-title">{t("auth.settings.deleteAccountSection")}</h3>

          <button className="settings-delete" onClick={handleDelete}>
            {t("auth.settings.deleteAccountButton")}
          </button>

        </div>

        {success && (
          <span className={`success-update ${visible ? "exit" : ""}`}>
            ✔
          </span>
        )}

        {error && (
          <div className={`error-update ${exitError ? "exit" : ""}`}>
            {errorMsg}
          </div>
        )}

      </div>
    </>
  )
}

export default ConfigAccount