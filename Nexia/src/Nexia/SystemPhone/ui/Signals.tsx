/* Hooks */
import { useAudio } from "../core/AudioContext"

/* Images */
import Bmore from "../../../assets/Icons/more_dark.svg"
import Bless from "../../../assets/Icons/less_dark.svg"
import Bpower from "../../../assets/Icons/power_dark.svg"



/* Render */
type Props = {
  onIncrease: () => void
  onDecrease: () => void
  onPower: () => void
}
/* Class to render the signal of the help component */
const Signals = ({ onIncrease, onDecrease, onPower }: Props) => {
  const { volumeUp, volumeDown } = useAudio()


  /* Type and class for render the html y css */
  type Signal = {
    id: string
    classNameLine: string
    containerSignalImage: string
    icon: string
    alt: string
    onclick: any
    onVolume: any
  }
  const signals: Signal[] = [
    { 
      id: "more", 
      classNameLine: "signal-line-cellPhone-more",
      containerSignalImage: "container-signal-image-more",
      icon: Bmore,
      alt: "Más",
      onclick: onIncrease,
      onVolume: volumeUp
    },
    { 
      id: "less", 
      classNameLine: "signal-line-cellPhone-less",
      containerSignalImage: "container-signal-image-less",
      icon: Bless,
      alt: "Menos",
      onclick: onDecrease,
      onVolume: volumeDown
    },
    { 
      id: "power", 
      classNameLine: "signal-line-cellPhone-power",
      containerSignalImage: "container-signal-image-power",
      icon: Bpower,
      alt: "Encender / Apagar",
      onclick: onPower,
      onVolume: null
    }
  ]

  

  return (
    <>
      {signals.map(v => (
        <div className={v.classNameLine}>
          <div className="signal-circle-cellPhone-left" />
          <div className="signal-circle-cellPhone-right" />

          <button className={v.containerSignalImage} onClick={() => {
            if (v.onclick) v.onclick()
            if (v.onVolume) v.onVolume()
          }}>
            <img src={v.icon} alt={v.alt} />
          </button>
        </div>
      ))}
    </>
  )
}

export default Signals