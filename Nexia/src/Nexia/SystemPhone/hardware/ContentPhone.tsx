/* Hooks */
import { useEffect, useState } from "react"

/* Wallpapaers */
import wallpapper1 from "../../../assets/Wallpappers/53119022025178.jpg"

/* Buttons volume, indicador volume and power */
import BorderButtons from "./BorderButtons"
import VolumeIndicator from "./VolumeIndicator"
import ScreenStatusBar from "../screens/screenStatusBar"

/* Screens */
import ScreenUnlock from "../screens/screenUnlock"



/* on-screen applications */
const ScreenApps = ({
    power,
    volume,
    showVolume,
    closingVolume,
    setVolume,
  }: 
  {
    power: boolean
    volume: number
    showVolume: boolean
    closingVolume: boolean
    setVolume: any
  }) => {
  const [wallpapper, setWallpapper] = useState(
    localStorage.getItem("wallpapper") || wallpapper1
  )

  useEffect(() => {
    const handleStorage = () => {
      setWallpapper(localStorage.getItem("wallpapper") || wallpapper1)
    }

    window.addEventListener("wallpapperChange", handleStorage)

    return () => window.removeEventListener("wallpapperChange", handleStorage)
  }, [])



  return (
    <>
      <div className="display-cellPhone">
        <div className="screen-cellPhone-touch">

          <div className={`screen-cellPhone-wallpapper ${power ? "on" : "off"}`}>

            <img 
              className="image-wallpapper" 
              src={wallpapper} 
              alt="Wallpapper" 
            />

            {/* Screens */}
            <ScreenUnlock />


            {/* Power on/off and show volume */}
            {power && (
              <>
                <ScreenStatusBar />

                {showVolume && (
                  <VolumeIndicator
                    volume={volume}
                    closing={closingVolume}
                    setVolume={setVolume}
                  />
                )}
              </>
            )}

          </div>

        </div>
      </div>
    </>
  )
}

/* Button Volume and power */
export const ButtonsVolumePower = ({
    onIncrease,
    onDecrease,
    onPower,
  }: {
    onIncrease: () => void
    onDecrease: () => void
    onPower: () => void
  }) => {
  return (
    <>
      <BorderButtons
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onPower={onPower}
      />
    </>
  )
}

export default ScreenApps