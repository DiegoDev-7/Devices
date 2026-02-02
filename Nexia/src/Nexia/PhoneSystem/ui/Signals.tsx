/* Images */
import Bmore from "../../../assets/Icons/more_light.svg"
import Bless from "../../../assets/Icons/less_light.svg"
import Bpower from "../../../assets/Icons/power_light.svg"



/* Render */
type Props = {
  onIncrease: () => void
  onDecrease: () => void
  onPower: () => void
}
/* Class to render the signal of the help component */
const Signals = ({ onIncrease, onDecrease, onPower }: Props) => {
  /* Type and class for render the html y css */
  type Signal = {
    id: string
    classNameLine: string
    containerSignalImage: string
    signalCircleLeft: string
    signalCircleRight: string
    imageSignal: string
    icon: string
    alt: string
    onclick: any
  }
  const signals: Signal[] = [
    { 
      id: "more", 
      classNameLine: "signal-line-cellPhone-more",
      containerSignalImage: "container-signal-image-more",
      signalCircleLeft: "signal-circle-cellPhone-left",
      signalCircleRight: "signal-circle-cellPhone-right",
      imageSignal: "image-signal",
      icon: Bmore,
      alt: "Más",
      onclick: onIncrease
    },
    { 
      id: "less", 
      classNameLine: "signal-line-cellPhone-less",
      containerSignalImage: "container-signal-image-less",
      signalCircleLeft: "signal-circle-cellPhone-left",
      signalCircleRight: "signal-circle-cellPhone-right",
      imageSignal: "image-signal",
      icon: Bless,
      alt: "Menos",
      onclick: onDecrease
    },
    { 
      id: "power", 
      classNameLine: "signal-line-cellPhone-power",
      containerSignalImage: "container-signal-image-power",
      signalCircleLeft: "signal-circle-cellPhone-left",
      signalCircleRight: "signal-circle-cellPhone-right",
      imageSignal: "image-signal",
      icon: Bpower,
      alt: "Encender / Apagar",
      onclick: onPower
    }
  ]

  return (
    <>
      {signals.map(v => (
        <div className={v.classNameLine}>
          <div className={v.signalCircleLeft} />
          <div className={v.signalCircleRight} />

          <button className={v.containerSignalImage} onClick={v.onclick}>
            <img className={v.imageSignal} src={v.icon} alt={v.alt} />
          </button>
        </div>
      ))}
    </>
  )
}

export default Signals