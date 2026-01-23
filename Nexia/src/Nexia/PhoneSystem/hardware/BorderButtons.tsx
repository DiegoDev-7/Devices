/* Buttons power, increase - decrease volume */
type Props = {
  onIncrease: () => void
  onDecrease: () => void
  onPower: () => void
}
const BorderButtons = ({ onIncrease, onDecrease, onPower }: Props) => {
  return (
    <>
      <div className="button-cellPhone-more" onClick={onIncrease} />
      <div className="button-cellPhone-less" onClick={onDecrease} />
      <div className="Button-cellPhone-power" onClick={onPower} />
    </>
  )
}

export default BorderButtons
