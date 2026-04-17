/* Hooks */
import { useEffect, useState } from "react"

/* Components */
import { LoadingIcon3D } from "../../components/loading.ldrs"



/* Render loading icon */
export const LoadingAtm = ({ onFinish }: { onFinish?: () => void }) => {
  const [visible, setVisible] = useState(false)
  
  // Enter animation
  useEffect(() => {
    const enter = setTimeout(() => {
      setVisible(true)
    }, 250)

    return () => clearTimeout(enter)
  }, [])

  // Out animation
  useEffect(() => {
    const exit = setTimeout(() => {
      setVisible(false)

      setTimeout(() => {
        onFinish?.()
      }, 1000)

    }, 1500)

    return () => clearTimeout(exit)
  }, [])



  return (
    <div className={`container-loading-atm ${visible ? "in" : "out"}`}>
      
      <LoadingIcon3D color="white" size="25" />
      
    </div>
  )
}