import { useState } from "react"

export const usePower = () => {
  const [power, setPower] = useState(false)
  const [locked, setLocked] = useState(false)

  const togglePower = () => {
    if (locked) return

    setLocked(true)
    setPower(prev => !prev)

    setTimeout(() => {
      setLocked(false)
    }, 2000)
  }

  return { power, togglePower }
}
