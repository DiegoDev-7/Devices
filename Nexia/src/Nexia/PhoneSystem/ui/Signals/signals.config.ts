import Bmore from "../../../../assets/Icons/more_light.svg"
import Bless from "../../../../assets/Icons/less_light.svg"
import Bpower from "../../../../assets/Icons/power_light.svg"


type Signal = {
  id: string
  classNameLine: string
  containerSignalImage: string
  signalCircleLeft: string
  signalCircleRight: string
  imageSignal: string
  icon: string
  alt: string
}
export const signals: Signal[] = [
  { 
    id: "more", 
    classNameLine: "signal-line-cellPhone-more",
    containerSignalImage: "container-signal-image-more",
    signalCircleLeft: "signal-circle-cellPhone-left",
    signalCircleRight: "signal-circle-cellPhone-right",
    imageSignal: "image-signal",
    icon: Bmore,
    alt: "More"
  },
  { 
    id: "less", 
    classNameLine: "signal-line-cellPhone-less",
    containerSignalImage: "container-signal-image-less",
    signalCircleLeft: "signal-circle-cellPhone-left",
    signalCircleRight: "signal-circle-cellPhone-right",
    imageSignal: "image-signal",
    icon: Bless,
    alt: "Less"
  },
  { 
    id: "power", 
    classNameLine: "signal-line-cellPhone-power",
    containerSignalImage: "container-signal-image-power",
    signalCircleLeft: "signal-circle-cellPhone-left",
    signalCircleRight: "signal-circle-cellPhone-right",
    imageSignal: "image-signal",
    icon: Bpower,
    alt: "Encender / Apagar"
  }
]