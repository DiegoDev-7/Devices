/* Hooks */
import { useState } from "react"

/* Services */
import { createAccountBank } from "../../../../services/external/bank/bank.service"
import { createAccountAtm } from "../../../../services/external/atm/atm.service"



/* Render create account bank */
type Props = {
  onCreated?: () => void
}
export const CreateBank = ({ onCreated }: Props) => {
  // Success
  const [success, setSuccess] = useState(false)
  const [visible, setVisible] = useState(false)

  // Error
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [error, setError] = useState(false)
  const [exitError, setExitError] = useState(false)


  // Create account in bank
  const createAccount = async () => {
    try {

      await createAccountBank()

      await createAccountAtm()

      
      setSuccess(true)
      
      setVisible(false)
      

      localStorage.setItem("bank_account", "true")


      // Enter animation success
      setTimeout(() => setVisible(true), 2000)
      
      // Delete animation success
      setTimeout(() => {
        setSuccess(false)
        onCreated?.()
      }, 2300)
      
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



  return (
    <>
      <div className="container-bank-empty-app">
        <div className="box-bank-empty-app">

          <h2>Cuenta bancaria</h2>

          <p>No tienes una cuenta creada para acceder a las funciones que tenemos creadas para ti</p>

          <button onClick={createAccount}>
            Crear cuenta
          </button>

          {/* Success update */}
          {success && (
            <span className={`success-create-bank ${visible ? "exit" : ""}`}>
              ✔
            </span>
          )}

          {error && (
            <div className={`error-create-bank ${exitError ? "exit" : ""}`}>
              {errorMsg}
            </div>
          )}

        </div>
      </div>
    </>
  )
}