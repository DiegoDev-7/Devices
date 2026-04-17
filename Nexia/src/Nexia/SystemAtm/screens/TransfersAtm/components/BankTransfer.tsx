/* Hooks */
import { useEffect, useState } from "react"

/* Icons */
import { Banknote } from "lucide-react"

/* Components */
import { BackButton } from "./BackButton"
import { tranferAtmToBank } from "../../../../services/external/transfers/transference"
import { getAtm } from "../../../../services/external/atm/atm.service"
import { LoadingIcon } from "../../../../components/loading.ldrs"



/* Bank transference option */
export const BankTransferScreen = ({ onBack }: any) => {
  const [amount, setAmount] = useState<number | null>(null)
  const [sendAmount, setSendAmount] = useState<number | null>(null)
  const [balance, setBalance] = useState<number | null>(null)

  // Success send data
  const [success, setSuccess] = useState(false)
  const [visible, setVisible] = useState(false)

  // Error message
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [error, setError] = useState(false)
  const [exitError, setExitError] = useState(false)
  

  // Get balance in atm
  const fetchAtm = async () => {
    try {

      const res = await getAtm()

      setBalance(res.data.atm.balance)

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
    fetchAtm()
  }, [])

  // Send money to bank
  const sendBank = async () => {
    try {

      const res = await tranferAtmToBank(amount)

      setSendAmount(res.data.amount)
      setAmount(null)

      await fetchAtm()


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
    <div className="box-atm-screen transfer-bank">


      {/* Back button */}
      <BackButton onBack={onBack} />


      <div className="header">
        <Banknote size={22} />
        <h2>Transferencia bancaria</h2>
        {balance ? <span>$ {balance}</span> : <LoadingIcon color="white" />}
        {success ? <span className={visible ? "in" : "out"}>- {sendAmount}</span> : ""}
      </div>


      {/* Form */}
      <div className="box-form-atm">
        <label>Monto</label>

        <input
          type="number"
          placeholder="0"
          value={amount ?? ""}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <button onClick={sendBank}>
          Enviar a banco
        </button>
      </div>


    </div>
  )
}