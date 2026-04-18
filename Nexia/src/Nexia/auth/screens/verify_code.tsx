/* Hooks */
import { useRef, useState } from "react"

/* Services */
import { verifyCode } from "../../services/external/user/user.service"



/* Verify code screen */
export const VerifyCodeScreen = ({
  email,
  onNext,
  length = 6,
}: {
  email: string
  onNext: (code: string) => void
  length?: number
}) => {
  const [values, setValues] = useState<string[]>(Array(length).fill(""))
  const inputsRef = useRef<(HTMLInputElement | null)[]>([])

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const code = values.join("")


  // Change values
  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return

    const newValues = [...values]
    newValues[index] = value
    setValues(newValues)

    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus()
    }
  }


  // Enter key
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace") {
      if (values[index] === "" && index > 0) {
        inputsRef.current[index - 1]?.focus()
      }
    }

    if (e.key === "Enter") {
      e.preventDefault()
      handleVerify()
    }
  }


  // Paste in input
  const handlePaste = (e: React.ClipboardEvent) => {
    const paste = e.clipboardData.getData("text").slice(0, length)

    if (!/^\d+$/.test(paste)) return

    const newValues = paste.split("")
    setValues(newValues)

    inputsRef.current[length - 1]?.focus()
  }


  // Verify code
  const handleVerify = async () => {
    if (code.length < length) {
      setError("Código incompleto")
      return
    }

    try {

      setLoading(true)

      setError("")

      await verifyCode(email, code)

      onNext(code)

    } catch (error: any) {

      setError(error?.response?.data?.message || error?.response?.data?.error || error?.message || "Código inválido")

    } finally {

      setLoading(false)

    }
  }



  return (
    <div 
      className="reset-container"
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault()
          handleVerify()
        }
      }}
    >
      
      <h2>Verificar código</h2>

      <div className="otp-container">
        {values.map((v, i) => (
          <input
            key={i}
            ref={(el: any) => (inputsRef.current[i] = el)}
            type="text"
            maxLength={1}
            value={v}
            onChange={(e) => handleChange(e.target.value, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            onPaste={handlePaste}
          />
        ))}
      </div>

      <div className={error ? "contain-error-reset-password" : ""}>
        {error && <span className="error">{error}</span>}
      </div>

      <button onClick={handleVerify} disabled={loading}>
        {loading ? "Verificando..." : "Verificar"}
      </button>
    </div>
  )
}