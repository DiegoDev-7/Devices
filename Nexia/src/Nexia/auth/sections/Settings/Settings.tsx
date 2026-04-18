/* Hooks */
import { useEffect, useState } from "react"

/* Services */
import { deleteAccount, updateUserById } from "../../../services/external/user/user.service"

/* Types */
import { type User } from "./types/user.type"



/* Render config account */
const ConfigAccount = ({ user }: { user: User }) => {

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

  // Logout
  const removeSesion = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("bank_account")
    window.location.reload()
  }



  return (
    <>
      <div className="panel-section settings-section">

        <h2>Configuración</h2>

        <div className="settings-group">

          <h3 className="settings-title">Información de la cuenta</h3>

          <div className="settings-row">

            <div className="settings-item">
              <label>Nombre</label>
              <input name="name" value={form.name} onChange={handleChange} />
            </div>

            <div className="settings-item">
              <label>Apellido</label>
              <input name="lastname" value={form.lastname} onChange={handleChange} />
            </div>

          </div>

          <div className="settings-item">
            <label>Correo</label>
            <input name="email" value={form.email} onChange={handleChange} />
          </div>

          <div className="settings-item">
            <label>Nueva contraseña</label>
            <input name="password" type="password" value={form.password} onChange={handleChange} />
          </div>

          <button className="settings-primary" onClick={handleUpdate}>Actualizar datos</button>

        </div>

        <div className="settings-group danger-zone">

          <h3 className="settings-title">Cerrar sesión</h3>

          <button className="settings-close" onClick={removeSesion}>
            Cerrar sesión
          </button>

          <h3 className="settings-title">Eliminar cuenta</h3>

          <button className="settings-delete" onClick={handleDelete}>
            Eliminar cuenta
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