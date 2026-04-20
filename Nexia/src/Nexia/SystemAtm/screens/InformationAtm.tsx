/* Hooks */
import { useEffect, useState } from "react"

/* Services */
import { getMyRank } from "../../services/external/leaderboard/leaderboard.service"
import { getUserById } from "../../services/external/user/user.service"
import { LoadingIcon } from "../../components/loading.ldrs"



/* Render Information */
type LeaderboardUser = {
  user_id: number
  name: string
  lastname: string
  avatar: string
  bank_balance: string
  atm_balance: string
  total_balance: string
  total_transactions: number
  total_contacts: number
  rank: number
}
export const InformationPanel = () => {
  // Leaderboard
  const [data, setData] = useState<LeaderboardUser | null>(null)
  const metric = "total_balance"
  const order = "ASC"

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


  // Load data
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {

        const res = await getMyRank(metric, order)
        setData(res.data)
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
  
    fetchLeaderboard()
  }, [metric])

  const isGoogleUser = user?.provider === "google"



  return (
    <div className="info_atm">
      <div className="info__grid">


        {/* global summary */}
        <section className="card full highlight">
          <h2>Vista General del Sistema Global</h2>

          <div className="stats">
            <div>
              <span>Saldo Total</span>
              <strong>$ {Number(data?.total_balance).toLocaleString("es-CO")}</strong>
            </div>

            <div>
              <span>Transacciones Totales</span>
              <strong>{data?.total_transactions}</strong>
            </div>

            <div>
              <span>Red de Contactos</span>
              <strong>{data?.total_contacts}</strong>
            </div>
          </div>
        </section>


        {/* transfers */}
        <section className="card">
          <h2>Transferencias</h2>

          <p>
            Enviar dinero entre cuentas bancarias o a números de teléfono registrados.
          </p>

          <ul>
            <li>Transferencia Banco → Banco</li>
            <li>Retiro ATM → Banco</li>
            <li>Transferencia a teléfono (sistema de contactos de usuarios)</li>
          </ul>
        </section>


        {/* settings */}
        <section className="card">
          {!user ? (
            <LoadingIcon color="white" />
          ) : isGoogleUser ? (
            <>
              <h2>Configuraciones</h2>

              <p>Ver y gestionar el perfil.</p>

              <ul>
                <li>Ver foto de perfil</li>
                <li>Cerrar sesión</li>
                <li>Elminar cuenta</li>
              </ul>
            </>
          ) : (
            <>
              <h2>Configuraciones</h2>

              <p>Gestiona la identidad y seguridad de tu cuenta.</p>

              <ul>
                <li>Cambiar nombre y apellido</li>
                <li>Actualizar correo electrónico</li>
                <li>Cambiar contraseña de forma segura</li>
              </ul>
            </>
          )}
        </section>
        


        {/* leaderboards */}
        <section className="card full">
          <h2>Tablas de Clasificación</h2>

          <p>Sistema de clasificación global basado en el rendimiento del usuario.</p>

          <div className="grid-2">
            <div>
              <h3>Clasificación por Saldo</h3>
              <ul>
                <li>Saldo bancario</li>
                <li>Saldo ATM</li>
                <li>Dinero total acumulado</li>
              </ul>
            </div>

            <div>
              <h3>Clasificación por Actividad</h3>
              <ul>
                <li>Total de transacciones</li>
                <li>Total de contactos</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Alert Error */}
        {error && (
          <div className={`error-update ${exitError ? "exit" : ""}`}>
            {errorMsg}
          </div>
        )}

      </div>
    </div>
  )
}