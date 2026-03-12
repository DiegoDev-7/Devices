/* Images */
import { useState } from "react"
import forwardBack from "../../assets/Icons/forward_dark.svg"



type RegisterProps = {
  onBack: () => void
}
export function RegisterPanel({ onBack }: RegisterProps) {
  const [open, setOpen] = useState(false)

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

        <h2 className="register-title">
          Crear cuenta
        </h2>

        {/* Form */}
        <form className="register-form">

          <div className="register-row">

            <div className="register-field">
              <label>Nombre</label>
              <input
                type="text"
                placeholder="Nombre"
                required
              />
            </div>

            <div className="register-field">
              <label>Apellido</label>
              <input
                type="text"
                placeholder="Apellido"
                required
              />
            </div>

          </div>

          <div className="register-field">
            <label>Correo</label>
            <input
              type="email"
              placeholder="correo@ejemplo.com"
              required
            />
          </div>

          <div className="register-field">
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="********"
              required
            />
          </div>

          <div className="register-options">

            <label className="option">
              <input type="checkbox" />
              Crear cuenta en la app del banco
            </label>

            <label className="option">
              <input type="checkbox" />
              Crear cuenta para el ATM
            </label>

          </div>

          <label className="terms-check">
            <input type="checkbox" required />
            Acepto los terminos y condiciones
          </label>

          <button className="register-submit">
            Registrarse
          </button>

        </form>

      </div>

      <div className="interfaz-terms-privacy">

      </div>
    </>
  )
}
