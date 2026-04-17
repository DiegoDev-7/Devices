/* Hooks */
import { useEffect, useRef, useState } from "react"

/* Image */
import nexia from "../../../assets/Nexia/NexiaWhite.svg"

/* Services */
import { loginAccountBank } from "../../services/external/bank/bank.service"



/* Render auth */
export const AuthAtm = ({ 
  onSuccess,
  enterCard,
  cardNumber
 }: { 
  onSuccess: () => void,
  enterCard: boolean,
  cardNumber: string
}) => {
  const [values, setValues] = useState(["", "", "", ""])
  const inputsRef = useRef<(HTMLInputElement | null)[]>([])
  const [visible, setVisible] = useState(false)
  const [used, setUsed] = useState(false)

  // Error message
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [error, setError] = useState(false)
  const [exitError, setExitError] = useState(false)


  // Auth with card
  const authBankCard = async () => {
    try {

      const last4Card = cardNumber.slice(-4)

      await loginAccountBank(last4Card)

      setVisible(false)

      setTimeout(() => {
        onSuccess()
      }, 1000)
      
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
    if (enterCard && cardNumber && !used) {
      setUsed(true)
      authBankCard()
    }
  }, [enterCard, cardNumber])


  // Send code at bank and verify
  const authBank = async () => {
    try {

      const last4: string = values.join("")

      if (last4.length < 4) return

      await loginAccountBank(last4)

      setVisible(false)

      setTimeout(() => {
        onSuccess()
      }, 1000)

    } catch (error: any) {

      resetInputs()

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
    if (values.every(v => v !== "")) {
      authBank()
    }
  }, [values])


  // Enter animation
  useEffect(() => {
    const id = setTimeout(() => {
      setVisible(true)
    }, 500)

    return () => clearTimeout(id)
  }, [])


  // Reset input
  const resetInputs = () => {
    setValues(["", "", "", ""])
    inputsRef.current[0]?.focus()
  }


  // Insert values
  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return

    const newValues = [...values]
    newValues[index] = value
    setValues(newValues)

    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus()
    }
  }


  // Delete last number in the input
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace") {
      if (values[index]) {
        const newValues = [...values]
        newValues[index] = ""
        setValues(newValues)
      } else if (index > 0) {
        inputsRef.current[index - 1]?.focus()
      }
    }
  }


  // Paste values
  const handlePaste = (e: React.ClipboardEvent) => {
    const paste = e.clipboardData.getData("text").slice(0, 4)

    if (!/^\d+$/.test(paste)) return

    const newValues = paste.split("").slice(0, 4)
    setValues([...newValues, "", "", "", ""].slice(0, 4))

    inputsRef.current[3]?.focus()
  }



  return (
    <>
      <div className={`container-auth-atm ${visible ? "in" : "out"}`}>


        {/* Icon nexia */}
        <div className="box-auth-atm">
          <img src={nexia} alt="Nexia logo" />
        </div>


        {/* Nexia description service */}
        <div className="box-auth-atm">
          <p>Por favor, introduzca los últimos cuatro dígitos de la tarjeta bancaria suministrada por el servicio Neixa. Asimismo, puede realizar el acceso utilizando la tarjeta mostrada en la parte derecha del dispositivo.</p>
        </div>


        {/* Inputs */}
        <div className="box-auth-atm">
          
          <div className="pin-container">

            {values.map((val, i) => (
              <div key={i} className="pin-box">
                <input
                  ref={(el: any) => (inputsRef.current[i] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={val ? "•" : ""}
                  onChange={(e) => handleChange(e.target.value, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  onPaste={handlePaste}
                />
              </div>
            ))}

          </div>
          
        </div>


        {/* Arrow right */}
        <span className="arrow-right-auth-atm">»</span>


        {/* Alert Error */}
        {error && (
          <div className={`error-update ${exitError ? "exit" : ""}`}>
            {errorMsg}
          </div>
        )}

      </div>
    </>
  )
}