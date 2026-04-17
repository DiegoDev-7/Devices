import { useAudio } from "../core/AudioContext"



/* Buttons power, increase - decrease volume */
type Props = {
  onIncrease: () => void
  onDecrease: () => void
  onPower: () => void
}
const BorderButtons = ({ onIncrease, onDecrease, onPower }: Props) => {
  /* Increase volume */
  const { volumeUp, volumeDown } = useAudio()


  return (
    <>
      <div className="button-cellPhone-more" onClick={() => {
        onIncrease()
        volumeUp()
      }} role="button" aria-label="More Volume" tabIndex={0} />
      <div className="button-cellPhone-less" onClick={() => {
        onDecrease()
        volumeDown()
      }} role="button" aria-label="Lower Volume" tabIndex={0} />
      <div className="Button-cellPhone-power" onClick={onPower} role="button" aria-label="Power" tabIndex={0} />
    </>
  )
}

export default BorderButtons