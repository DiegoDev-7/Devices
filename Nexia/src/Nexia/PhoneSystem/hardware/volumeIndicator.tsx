/* Icons */
import music from "../../../assets/Icons/music.svg"

/* core */
import { useAudio } from "../core/AudioContext"



/* Volume input and output */
type Props = {
  volume: number
  setVolume: (volume: number) => void
  closing: boolean
}
const VolumeIndicator: React.FC<Props> = ({ volume, setVolume, closing }) => {
  const { audioRef } = useAudio()
  
  const handleVolumeChange = (value: number) => {
    if (!audioRef.current) return
    const newVol = Math.min(Math.max(value / 100, 0), 1)
    audioRef.current.volume = newVol
    setVolume(value)
  }



  return (
    <div className={`container-volume ${closing ? "out" : "in"}`}>
      <div className="volume-bar">
        <input
          className="volume-bar-fill"
          style={{ width: `${volume}%` }}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={volume}
          onChange={(e) => handleVolumeChange(Number(e.target.value))}
        />
        <img
          className="image-bar-fill-music"
          src={music}
          alt="music"
        />
      </div>
    </div>
  )
}

export default VolumeIndicator
