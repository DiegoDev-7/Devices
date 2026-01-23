/* Icons */
import music from "../../../assets/Icons/music.svg"



/* Volume input and output */
type Props = {
  volume: number
  closing: boolean
}
const VolumeIndicator = ({ volume, closing }: Props) => {
  return (
    <div className={`container-volume ${closing ? "out" : "in"}`}>
      <div className="volume-bar">
        <div
          className="volume-bar-fill"
          style={{ width: `${volume}%` }}
        />
        <img className="image-bar-fill-music" src={music} alt="music" />
      </div>
    </div>
  )
}

export default VolumeIndicator
