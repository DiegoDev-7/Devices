import { useState, useRef } from "react"

export const useVolume = () => {
  /* Volume */
  const [volume, setVolume] = useState(50)
  const [showVolume, setShowVolume] = useState(false)
  const [closingVolume, setClosingVolume] = useState(false)

  /* Timers */
  const hideTimer = useRef<number | null>(null)
  const closeTimer = useRef<number | null>(null)

  /* Timer for the display volume indicator */
  const showTemporarily = () => {
    setShowVolume(true)
    setClosingVolume(false)

    if (hideTimer.current) clearTimeout(hideTimer.current)
    if (closeTimer.current) clearTimeout(closeTimer.current)

    hideTimer.current = window.setTimeout(() => {
      setClosingVolume(true)

      closeTimer.current = window.setTimeout(() => {
        setShowVolume(false)
        setClosingVolume(false)
      }, 300)
    }, 2000)
  }

  /* Increment volume */
  const increase = () => {
    setVolume(v => Math.min(100, v + 10))
    showTemporarily()
  }

  /* Decrease volume */
  const decrease = () => {
    setVolume(v => Math.max(0, v - 10))
    showTemporarily()
  }

  return { volume, setVolume, showVolume, closingVolume, increase, decrease }
}
