/* Hooks */
import { useState } from "react"

/* Services */
import { requestReset } from "../../services/external/user/user.service"



/* Request screen */
export const RequestResetScreen = ({
  onNext,
}: {
  onNext: (email: string) => void
}) => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    try {

      setLoading(true)

      setError("")

      await requestReset(email)

      onNext(email)

    } catch (error: any) {

      setError(error?.response?.data?.message || error?.response?.data?.error || error?.message || "Error")

    } finally {

      setLoading(false)

    }
  }



  return (
    <div className="reset-container">
      
      <h2>Recuperar contraseña</h2>

      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className={error ? "contain-error-reset-password" : ""}>
        {error && <span className="error">{error}</span>}
      </div>

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Enviando..." : "Enviar código"}
      </button>
    </div>
  )
}