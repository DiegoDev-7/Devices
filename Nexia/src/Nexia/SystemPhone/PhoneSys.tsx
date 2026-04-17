/* Ui components */
import Signals from "./ui/Signals"
import FrontCamera from "./ui/FrontCamera"
import CellPhoneEdge from "./ui/CellPhoneEdge"

/* Hardware */
import ScreenApps, { ButtonsVolumePower } from "./hardware/ContentPhone"

/* Hooks */
import { usePower } from "./hooks/usePower"
import { useVolume } from "./hooks/useVolume"
import { AudioProvider } from "./core/AudioContext"



/* Render */
const CellPhone = () => {
  /* Phone power system status and actions and System status and volume control */
  const { power, togglePower } = usePower()
  const { volume, setVolume, showVolume, closingVolume, increase, decrease } = useVolume()
  


  return (
    <>
      <div className="container-nexia-cellPhone">
        
        {/* CellPhone */}
        <AudioProvider>
          <>
            <div className="container-cellPhone-border">

              {/* Screen */}
              {/* Screen phone, volume input and output */}
              <ScreenApps
                power={power}
                volume={volume}
                setVolume={setVolume}
                showVolume={showVolume}
                closingVolume={closingVolume}
              />


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
          </>
        </AudioProvider>
        
      </div>
    </>
  )
}

export default CellPhone