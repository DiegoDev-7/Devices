/* Hooks */
import { useEffect, useState } from "react"

/* Ui */
import { BackButton } from "../ui/BackButton"

/* Services */
import { sendSupport } from "../../../../services/external/support/support.service"
import { getUserById } from "../../../../services/external/user/user.service"



/* Services in phone settings */
/* Thirteenth option in the settings */
export const Services = ({ back }: any) => {
  /* Form */
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  // Success send data
  const [success, setSuccess] = useState(false)
  const [visible, setVisible] = useState(false)

  // Error message
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [error, setError] = useState(false)
  const [exitError, setExitError] = useState(false)


  // Get user
  const fetchUser = async () => {
    const res = await getUserById()

    setName(res.data.name)
    setEmail(res.data.email)
  }
  useEffect(() => {
    fetchUser()
  }, [])


  // Send email to support
  const sendEmail = async () => {
    try {

      await sendSupport(name, email, message)

      setMessage("")


      setSuccess(true)
      setVisible(false)
      
      // Enter animation success
      setTimeout(() => setVisible(true), 2000)
      
      // Delete animation success
      setTimeout(() => setSuccess(false), 2300)
      
    } catch (error: any) {

      setMessage("")
      
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



  return (
    <div className="services-container">

      {/* Go back */}
      <BackButton back={back} text="Servicios y Comentarios" />

      <div className="services-content">

        {/* Opciones */}
        <div className="services-section">

          <div className="service-item">
            <h4>Soporte</h4>
            <p>Contacta con atención al cliente</p>
          </div>

          <div className="service-item">
            <h4>Reportar problema</h4>
            <p>Informa errores o fallos en la app</p>
          </div>

          <div className="service-item">
            <h4>Sugerencias</h4>
            <p>Envía ideas para mejorar la aplicación</p>
          </div>

        </div>

        {/* Comentarios */}
        <div className="services-feedback">

          <h4>Enviar comentario</h4>

          <textarea placeholder="Escribe tu comentario..." value={message} onChange={(e) => setMessage(e.target.value)} />

          <button onClick={sendEmail}>Enviar</button>

        </div>

      </div>


      {/* Successful message */}
      {success && (
        <span className={`success-message-phone ${visible ? "exit" : ""}`}>
          ✔
        </span>
      )}

      {/* Error */}
      {error && (
        <div className={`error-message-phone ${exitError ? "exit" : ""}`}>
          {errorMsg}
        </div>
      )}

    </div>
  )
}