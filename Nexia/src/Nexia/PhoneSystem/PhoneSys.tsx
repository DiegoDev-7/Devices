/* Ui components */
import Signals from "../PhoneSystem/ui/Signals/Signals"
import FrontCamera from "../PhoneSystem/ui/Camera/FrontCamera"
import CellPhoneEdge from "./ui/CellPhoneEdge/CellPhoneEdge"

/* Hardware */
import ScreenApps, { ButtonsVolumePower } from "./hardware/ScreenApps"

/* Hooks */
import { usePower } from "../PhoneSystem/hooks/usePower"
import { useVolume } from "../PhoneSystem/hooks/useVolume"



/* Render */
const CellPhone = () => {
  /* Phone power system status and actions and System status and volume control */
  const { power, togglePower } = usePower()
  const { volume, showVolume, closingVolume, increase, decrease } = useVolume()
  


  return (
    <>
      <div className="container-nexia-cellPhone">
        {/* CellPhone */}
        <div className="container-cellPhone-border">

          {/* Screen */}
          <div className="display-cellPhone">
            <div className="screen-cellPhone-touch">


              {/* Volume input and output */}
              <ScreenApps
                power={power}
                volume={volume}
                showVolume={showVolume}
                closingVolume={closingVolume}
              />

            </div>
          </div>

          {/* Camera */}
          <FrontCamera />


          {/* Side buttons of the cell phone */}
          <ButtonsVolumePower
            onIncrease={increase}
            onDecrease={decrease}
            onPower={togglePower}
          />

          {/* top and bottom edge of the cell phone */}
          <CellPhoneEdge />

          {/* Signal: Line, more, less, power */}
          <Signals
            onIncrease={increase}
            onDecrease={decrease}
            onPower={togglePower}
          />

        </div>
      </div>
    </>
  )
}

export default CellPhone