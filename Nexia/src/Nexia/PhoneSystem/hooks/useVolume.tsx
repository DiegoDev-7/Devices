import { useState, useRef } from "react"

export const useVolume = () => {
  const [volume, setVolume] = useState(() => Math.floor(Math.random() * 100))
  const [showVolume, setShowVolume] = useState(false)
  const [closingVolume, setClosingVolume] = useState(false)

  const hideTimer = useRef<number | null>(null)
  const closeTimer = useRef<number | null>(null)

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

  const increase = () => {
    setVolume(v => Math.min(100, v + 10))
    showTemporarily()
  }

  const decrease = () => {
    setVolume(v => Math.max(0, v - 10))
    showTemporarily()
  }

  return { volume, showVolume, closingVolume, increase, decrease }
}
