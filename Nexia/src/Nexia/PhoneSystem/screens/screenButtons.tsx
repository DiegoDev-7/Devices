/* Images */
import square from "../../../assets/Icons/square_light.svg"
import circle from "../../../assets/Icons/cirlce_light.svg"
import triangle from "../../../assets/Icons/triangleArrow_light.svg"



/* Virtual buttons */

type Props = {
  onBack: () => void
  onHome: () => void
}
const ScreenButtons = ({ onBack, onHome }: Props) => {
  return (
    <>
      <div className="screen-touch-cellPhone-buttons">
        <button className="button-screen-cellPhone">
          <img className="image-screen-touch-square" src={square} alt="square" />
        </button>
        <button className="button-screen-cellPhone" onClick={onHome}>
          <img className="image-screen-touch-circle" src={circle} alt="circle" />
        </button>
        <button className="button-screen-cellPhone" onClick={onBack}>
          <img className="image-screen-touch-triangle" src={triangle} alt="triangle" />
        </button>
      </div>
    </>
  )
}

export default ScreenButtons
