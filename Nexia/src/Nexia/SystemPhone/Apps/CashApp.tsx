/* Hooks */
import { useEffect, useRef, useState } from "react"

/* Images */
import gold from "../../../assets/Icons/cash_gold.svg"

/* Services */
import { getBank } from "../../services/external/bank/bank.service"

/* Components */
import { LoadingIcon } from "../../components/loading.ldrs"
import { clickReward } from "../../services/external/game/rewards.service"



/* Render */
const CashApp = () => {
  // Get data
  const [bank, setBank] = useState<any>(null)
  const [cash , setCash] = useState<any>(null)

  // Clicks
  const [count, setCount] = useState<number>(0)
  
  // Timer
  const timeoutRef = useRef<any>(null)

  // Success send data
  const [success, setSuccess] = useState(false)
  const [visible, setVisible] = useState(false)

  // Error message
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [error, setError] = useState(false)
  const [exitError, setExitError] = useState(false)



  // Get balance by account bank
  const fetchBank = async () => {
    try {

      const res = await getBank()

      setBank(res.data)
      
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
    fetchBank()
  }, [])


  
  // Send clicks and get money
  const sendClickGame = async () => {
    try {

      if (count <= 0) return
      
      const res = await clickReward(count)

      await fetchBank()

      setCount(0)
      setCash(res.data.reward)

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


  // Counter clicks
  const clicks = () => {
    setCount(prev => prev + 1)
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      sendClickGame()
    }, 3000)
  }



  return (
    <>
      <div className="cash-container">

        {/* Balance */}
        <div className="cash-header">

          {bank ? (
            <>

              <h2>Balance</h2>
              
              <span>
                $ {bank.bank.balance}
              </span>

              {success && (
                <div className={`cash-reward-float ${visible ? "exit" : ""}`}>
                  +{cash}
                </div>
              )}

            </>

          ) : <LoadingIcon color="black" /> }

        </div>

        {bank && (
          <span>Clicks: {count}</span>
        )}


        {/* Button */}
        <div className="cash-action">
          <button className="cash-button" onClick={clicks}>
            <img src={gold} alt="Dinero" />
          </button>
        </div>


        {/* Error */}
        <div className="cash-error">
          {error && (
            <div className={`cash-error-box ${exitError ? "exit" : ""}`}>
              {errorMsg}
            </div>
          )}
        </div>

      </div>
    </>
  )
}

export default CashApp