/* Hooks */
import { useEffect, useState } from "react"

/* Auth */
import DeleteAccountButton from "../components/DeleteButton"

/* Services */
import { deleteAccount, getUserById, updateUserById } from "../../services/external/user/user.service"

/* Images */
import google from "../../../assets/Apps/google.svg"

/* Components */
import { LoadingIcon } from "../../components/loading.ldrs"



/* Configuration option */
export default function Settings() {
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

  const isGoogleUser = user?.provider === "google"



  return (
    <div className="container-settings-section">

      {!user ? (
        <LoadingIcon color="black" />
      ) : isGoogleUser ? (
        <ConfigWithGoogle user={user} />
      ) : (
        <ConfigAccount user={user} />
      )}


      {/* Alert error */}
      {error && (
        <div className={`error-update ${exitError ? "exit" : ""}`}>
          {errorMsg}
        </div>
      )}

    </div>
  )
}



/* Configuration with google */
type User = {
  avatar: string,
  created_at: string,
  name: string,
  lastname: string,
  email: string,
}
const ConfigWithGoogle = ({ user }: { user: User }) => {
  // Remove item in localStorage
  const removeSesion = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("notes")
    localStorage.removeItem("atm_boot_done")
    localStorage.removeItem("bank_account")
    localStorage.removeItem("privacity_option")

    window.location.reload()
  }



  return (
    <>
      <div className="panel-section settings">

        <h2>Configuracion</h2>

        <div className="settings__size">

          <div className="settings__content">

            <div className="profile-card">

              <div className="profile-card__provider">
                <img src={google} alt="google" />
              </div>

              <img 
                className="profile-card__avatar"
                src={user?.avatar} 
                alt="profile"
              />

              <div className="profile-card__names">
                <h3>{user?.name}</h3>

                <h3>{user?.lastname}</h3>
              </div>

              <p>{user?.email}</p>

            </div>

          </div>

          <div className="settings__actions">

            <button className="btn logout" onClick={removeSesion}>
              Cerrar sesión
            </button>

            <DeleteAccountButton />

          </div>

        </div>

      </div>
    </>
  )
}



/* Account configuration Normal */
const ConfigAccount = ({ user }: { user: User }) => {
  // Success send data
  const [success, setSuccess] = useState(false)
  const [visible, setVisible] = useState(false)

  // Error eliminating account
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



  // Form update
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


  // Handle inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }


  // Update user
  const handleUpdate = async () => {
    try {

      const payload: any = {}

      if (form.name) payload.name = form.name
      if (form.lastname) payload.lastname
      if (form.email) payload.email
      if (form.password) payload.password = form.password

      await updateUserById(payload)


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


  // Delete user
  const handleDelete = async () => {
    try {
      
      await deleteAccount()

      localStorage.removeItem("token")
      localStorage.removeItem("notes")
      localStorage.removeItem("atm_boot_done")
      localStorage.removeItem("bank_account")

      
      setSuccess(true)

      setVisible(false)


      // Enter animation success
      setTimeout(() => setVisible(true), 2000)
      
      // Delete animation success
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
              <input 
                name="name" 
                value={form.name} 
                onChange={handleChange} 
              />
            </div>

            <div className="settings-item">
              <label>Apellido</label>
              <input 
                name="lastname" 
                value={form.lastname} 
                onChange={handleChange} 
              />
            </div>

          </div>

          <div className="settings-item">
            <label>Correo</label>
            <input 
              name="email" 
              value={form.email}
              onChange={handleChange}
              placeholder="example@example.com"
            />
          </div>


          <div className="settings-item">
            <label>Nueva contraseña</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Ingrese nueva contraseña"
            />
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


        {/* Success update */}
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