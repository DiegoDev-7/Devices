/* Images */
import { useState } from "react"
import forwardBack from "../../assets/Icons/forward_dark.svg"



type LoginProps = {
  onBack: () => void
}
export function LoginPanel({ onBack }: LoginProps) {
  const [open, setOpen] = useState(false)

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

        <h2 className="login-title">
          Iniciar sesion
        </h2>

        {/* Form */}
        <form className="login-form">

          <div className="login-field">
            <label>Correo</label>
            <input
              type="email"
              placeholder="correo@ejemplo.com"
              required
            />
          </div>

          <div className="login-field">
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="********"
              required
            />
          </div>

          <button className="login-submit">
            Acceder
          </button>

        </form>

        <button className="login-recover">
          ¿Olvidaste tu contraseña?
        </button>

      </div>
      <div className="interfaz-terms-privacy">

      </div>
    </>
  )
}
