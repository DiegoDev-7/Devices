/* Hooks */
import { useEffect, useState } from "react"

/* Services */
import { timeReward } from "../../services/external/game/rewards.service"
import { getBank } from "../../services/external/bank/bank.service"

/* Components */
import { LoadingIcon } from "../../components/loading.ldrs"



/* Render */
const RewardsApp = () => {
  // Get data
  const [bank, setBank] = useState<any>(null)
  const [reward, setReward] = useState<any>(null)

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


  // Get reward
  const rewards = async () => {
    try {

      const res = await timeReward()
      
      await fetchBank()

      setReward(res.data.reward)


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
      <div className="rewards-container">


        {/* Header */}
        <div className="rewards-header">

          <h2>Dinero total</h2>

          <div className="balance-box">
            {bank ? (
              <>
                <span className="balance">
                  $ {bank.bank.balance}
                </span>

                {success && (
                  <div className={`reward-float ${visible ? "exit" : ""}`}>
                    +{reward}
                  </div>
                )}
              </>
            ) : <LoadingIcon color="black" /> }
          </div>

          <p className="info">
            La recompensa se puede reclamar cada 5 minutos
          </p>

        </div>


        {/* Button */}
        <div className="rewards-action">
          <button onClick={rewards}>
            Obtener recompensa
          </button>
        </div>


        {/* Error */}
        <div className="rewards-error">
          {error && (
            <div className={`reward-error-box ${exitError ? "exit" : ""}`}>
              {errorMsg}
            </div>
          )}
        </div>

      </div>
    </>
  )
}

export default RewardsApp