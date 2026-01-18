/* Class to render the signal of the help component */
type Props = {
  classNameLine: string
  containerSignalImage: string
  signalCircleLeft: string
  signalCircleRight: string
  imageSignal: string
  icon: string
  alt: string
}
const Signal = ({ classNameLine, containerSignalImage, signalCircleLeft, signalCircleRight, imageSignal, icon, alt }: Props) => {
  return (
    <div className={classNameLine}>
      <div className={signalCircleLeft} />
      <div className={signalCircleRight} />

      <div className={containerSignalImage}>
        <img className={imageSignal} src={icon} alt={alt} />
      </div>
    </div>
  )
}

export default Signal