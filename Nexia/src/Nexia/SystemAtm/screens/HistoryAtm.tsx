/* Hooks */
import { useEffect, useState } from "react"

/* Services */
import { getTransferHistory } from "../../services/external/transfers/transference"
import { getUserById } from "../../services/external/user/user.service"



/* Render transferences history panel */
type transaction = {
  transaction_id: number,
  created_at: string,
  amount: string,
  type: string
}
type user = {
  name: string,
  lastname: string
}
export const HistoryPanel = () => {
  const [transferBank, setTransferBank] = useState<transaction[]>([])
  const [transferUser, setTransferUser] = useState<transaction[]>([])
  const [user, setUser] = useState<user | null>(null)

  const [page, setPage] = useState(1)

  // Error message
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [error, setError] = useState(false)
  const [exitError, setExitError] = useState(false)


  // Get transfers
  const fetchTransfer = async () => {
    try {
      const [resAtmBank, resAtmUser, resUser] = await Promise.all([
        getTransferHistory({
          page,
          limit: 10,
          type: "atm_to_bank"
        }),
        getTransferHistory({
          page,
          limit: 10,
          type: "atm_to_user"
        }),
        getUserById()
      ])

      setTransferBank(resAtmBank.data)
      setTransferUser(resAtmUser.data)
      setUser(resUser.data)
      
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
    fetchTransfer()
  }, [])



  return (
    <div className="atm-history">


      {/* Bank transactions receiver */}
      <div className="history-column bank">
        <div className="history-header">
          <span>Transacciones bancarias</span>
        </div>

        <div className="history-list">
          {transferBank.length === 0 ? (
            <p>No has realizado transacciones al banco</p>
          ) : (
            <>
              {transferBank.map(v => {
                const date = new Date(v.created_at)

                return (
                  <div key={v.transaction_id} className="history-item">
                    <div className="left">
                      <strong>${v.amount}</strong>
                      <span>#TRX-{v.transaction_id}</span>
                    </div>

                    <div className="right">
                      <strong>
                        {date.toLocaleDateString()}
                      </strong>
                      <span>
                        {date.toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                )
              })}
            </>
          )}
        </div>
      </div>


      {/* User transactions receiver */}
      <div className="history-column user">
        <div className="history-header">
          <span>Transferencias a usuarios</span>
        </div>

        <div className="history-list">
          {transferUser.length === 0 ? (
            <p>No has realizado transacciones a usuarios</p>
          ) : (
            <>
              {transferUser.map(v => {
                const date = new Date(v.created_at)

                return (
                  <div key={v.transaction_id} className="history-item">
                    <div className="left">
                      <strong>${v.amount}</strong>
                      <span>#TRX-{v.transaction_id}</span>
                    </div>

                    <div className="right">
                      <strong>
                        {date.toLocaleDateString()}
                      </strong>
                      <span>
                        {date.toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                )
              })}
            </>
          )}
        </div>
      </div>

      {/* Alert Error */}
      {error && (
        <div className={`error-update ${exitError ? "exit" : ""}`}>
          {errorMsg}
        </div>
      )}

    </div>
  )
}