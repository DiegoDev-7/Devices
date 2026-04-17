/* Hooks */
import { useEffect, useState } from "react"

/* Image */
import eye from "../../../../../assets/Icons/eye.svg"
import eyeclose from "../../../../../assets/Icons/eye_close.svg"

/* Services */
import { getBank } from "../../../../services/external/bank/bank.service"
import { LoadingIcon } from "../../../../components/loading.ldrs"

/* Components */
import { CardBank } from "./CardBank"



/* Bank interface */
type bank = {
  balance: string,
  card: string,
}
export function InterfaceBank({ setPage }: any) {
  // Activate view cash
  const [money, setMoney] = useState<boolean>(false)
  const [cash, setCash] = useState<bank | null>(null)

  // Activate views
  const [eyeb, setEyeb] = useState<boolean>(false)
  const [viewCard, setViewCard] = useState<boolean>(false)



  // Fetch bank money
  const fetchBank = async () => {
    
    try {
      
      const res = await getBank()
      
      setCash(res.data.bank)
      
    } catch (error: any) {
      
      throw new Error("Can't get bank data")
      
    }
    
  }
  
  useEffect(() => {
    fetchBank()
  }, [])


  // Button to change eye and text
  const handleEye = () => {
    setEyeb(prev => !prev)
    setMoney(prev => !prev)
  }
  const handleCard = () => {
    setViewCard(prev => !prev)
  }



  return (
    <>
      <div className="bank-container">

        <h2>Cuenta bancaria</h2>


        {/* Balance */}
        <div className="bank-balance-card">

          <div className="balance-header">
            <h3>Saldo disponible</h3>

            <button onClick={handleEye}>
              <img src={eyeb ? eye : eyeclose} alt="eye" />
            </button>
          </div>

          <span className="balance-amount">
            {cash ? (
              <>
                $ {money ? cash.balance : "••••••"}
              </>
            ) : <LoadingIcon color="white" />}
          </span>

        </div>


        {/* Actions */}
        <div className="bank-actions">

          <button onClick={() => setPage("transfer")}>
            Transferir
          </button>

          <p onClick={() => setPage("transactions")}>
            Ver últimas transacciones
          </p>

        </div>


        {/* Card */}
        {viewCard && (
          <CardBank />
        )}

        <p className="toggle-card" onClick={handleCard}>
          {viewCard ? "Ocultar tarjeta" : "Ver tarjeta"}
        </p>


      </div>
    </>
  )
}