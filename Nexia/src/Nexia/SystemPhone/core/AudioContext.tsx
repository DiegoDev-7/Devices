/* Hooks */
import { createContext, useContext, useRef, useState, type ReactNode } from "react"



/* Volume context reference */
type AudioContextType = {
  audioRef: React.RefObject<HTMLAudioElement | null>
  volume: number
  playPause: () => void
  volumeUp: () => void
  volumeDown: () => void
  setVolumeDirect: (value: number) => void
}


/* Render context */
const AudioContext = createContext<AudioContextType | undefined>(undefined)


/* Render audio */
export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [volume, setVolume] = useState(50)


  /* Play - Pause */
  const playPause = () => {
    if (!audioRef.current) return
    if (audioRef.current.paused) audioRef.current.play()
    else audioRef.current.pause()
  }


  /* Volume up */
  const volumeUp = () => {
    if (!audioRef.current) return
    const newVolume = Math.min(audioRef.current.volume + 0.1, 1)
    audioRef.current.volume = newVolume
    setVolume(newVolume * 100)
  }


  /* Volume Down */
  const volumeDown = () => {
    if (!audioRef.current) return
    const newVolume = Math.max(audioRef.current.volume - 0.1, 0)
    audioRef.current.volume = newVolume
    setVolume(newVolume * 100)
  }


  /* Assign volume */
  const setVolumeDirect = (value: number) => {
    if (!audioRef.current) return
    const newVol = Math.min(Math.max(value / 100, 0), 1)
    audioRef.current.volume = newVol
    setVolume(value)
  }

  return (
    <AudioContext.Provider value={{ audioRef, volume, playPause, volumeUp, volumeDown, setVolumeDirect }} >
      {children}
    </AudioContext.Provider>
  )
}



/* Hook audio */
export const useAudio = () => {
  const context = useContext(AudioContext)
  if (!context) throw new Error("useAudio must be used within AudioProvider")
  return context
}