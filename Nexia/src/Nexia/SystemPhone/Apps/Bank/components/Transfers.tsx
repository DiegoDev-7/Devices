/* Hooks */
import { useState } from "react"

/* Services */
import { tranferBankToAtm } from "../../../../services/external/transfers/transference"



/* Transfers */
export function InterfaceTransfer() {
  const [amount, setAmount] = useState<number | null>(null)

  // Success send data
  const [success, setSuccess] = useState(false)
  const [visible, setVisible] = useState(false)

  // Error message
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [error, setError] = useState(false)
  const [exitError, setExitError] = useState(false)



  // Send tranference to ATM
  const transfer = async () => {
    try {

      if (!amount || amount <= 0) {
        throw new Error("Invalid amount")
      }

      await tranferBankToAtm(amount)

      setAmount(null)


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



  return (
    <>
      <div className="atm-transfer-container">

        <div className="atm-card-transfers">


          {/* Header */}
          <div className="atm-header">
            <h2>Transferir a ATM</h2>
            <p>Envía dinero a tu dispositivo ATM</p>
          </div>


          {/* Form */}
          <div className="atm-form">

            <label>Monto</label>
            <input 
              type="number" 
              placeholder="$ 0" 
              value={amount ?? ""}
              onChange={(e) => setAmount(Number(e.target.value))}
            />

          </div>


          {/* Action */}
          <button 
            className="atm-button"
            onClick={transfer}
          >
            Transferir
          </button>


          {/* Success transfer */}
          <div className="transfer-success">  
            {success && (
              <div className={`transfer-success-box ${visible ? "exit" : ""}`}>
                ✓
              </div>
            )}
          </div>


          {/* Error */}
          <div className="transfer-error">
            {error && (
              <p className={`transfer-error-box ${exitError ? "exit" : ""}`}>
                {errorMsg}
              </p>
            )}
          </div>

        </div>

      </div>
    </>
  )
}