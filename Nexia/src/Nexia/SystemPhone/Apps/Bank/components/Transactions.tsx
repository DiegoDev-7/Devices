/* Hooks */
import { useEffect, useRef, useState } from "react"

/* Services */
import { getTransferHistory } from "../../../../services/external/transfers/transference"

/* Components */
import { LoadingIcon } from "../../../../components/loading.ldrs"



/* Transactions */
type transaction = {
  transaction_id: number,
  created_at: string,
  amount: string,
  type: string
}
export function InterfaceTransactions() {
  // Get data and loading icon
  const [transfer, setTransfer] = useState<transaction[]>([])
  const [loading, setLoading] = useState(true)

  // Render more pages
  const [page, setPage] = useState(1)
  const [loadingPage, setLoadingPage] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  // Observer for load pages
  const observerRef = useRef<HTMLDivElement | null>(null)


  // Fetch transaction
  const fetchTransaction = async () => {
    if (loadingPage || !hasMore) return

    setLoadingPage(true)

    try {
      const res = await getTransferHistory({
        page,
        limit: 10,
        type: "bank_to_atm"
      })

      const data = res.data

      if (data.length === 0) {
        setHasMore(false)
      } else {
        setTransfer(prev => {
          const unique = data.filter(
            (newItem: any) =>
              !prev.some(
                item => item.transaction_id === newItem.transaction_id
              )
          )

          return [...prev, ...unique]
        })
      }

    } catch (error: any) {

      const message =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        error?.message ||
        "Error inesperado"

        throw new Error(message)

    } finally {

      setLoading(false)

      setLoadingPage(false)

    }
  }

  useEffect(() => {
    fetchTransaction()
  }, [page])



  // Trigger for view more transactions
  useEffect(() => {

    if (!observerRef.current) return

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore && !loadingPage) {
        setPage(prev => prev + 1)
      }
    })

    observer.observe(observerRef.current)

    return () => observer.disconnect()

  }, [hasMore, loadingPage])



  return (
    <>
      <div className="transactions-container">

        {loading ? 
          <LoadingIcon color="black" /> 
          : transfer.length === 0 ?
            <div className="empty-transactions">

              <div className="empty-card">

                <h2>No hay transacciones</h2>

                <p>
                  Aún no has realizado ninguna operación. 
                  Cuando hagas una transferencia, aparecerá aquí.
                </p>

              </div>

            </div>
          : (
            <>
              {transfer.map(v => {
                const date = new Date(v.created_at)

                return (
                  <div key={v.transaction_id} className="receipt">

                    {/* Header */}
                    <div className="receipt-header">
                      <h2>Comprobante</h2>
                      <span>#TRX-{v.transaction_id}</span>
                    </div>

                    <div className="receipt-status success">
                      Transacción exitosa
                    </div>

                    <div className="receipt-amount">
                      $ {v.amount}
                    </div>

                    <div className="divider"></div>

                    {/* Details */}
                    <div className="receipt-details">

                      <div className="row">
                        <span>Fecha</span>
                        <span>{date.toLocaleDateString()}</span>
                      </div>

                      <div className="row">
                        <span>Hora</span>
                        <span>{date.toLocaleTimeString()}</span>
                      </div>

                      <div className="row">
                        <span>Tipo</span>
                        <span>Transferencia</span>
                      </div>

                      <div className="row">
                        <span>Destino</span>
                        <span>{v.type.replace("_to_", " to ").replaceAll("_", " ")}</span>
                      </div>

                    </div>

                    {/* Divider */}
                    <div className="divider"></div>

                    {/* Footer */}
                    <div className="receipt-footer">
                      <p>Este comprobante es válido como soporte de la transacción.</p>
                    </div>

                  </div>
                )
              })}

              {/* Invisible trigger */}
              <div ref={observerRef} style={{ height: "5px" }} />

            </>
          )  
        }
        
      </div>
    </>
  )
}