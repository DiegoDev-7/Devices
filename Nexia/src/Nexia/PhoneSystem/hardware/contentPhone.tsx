/* Wallpapaers */
import wallpaper1 from "../../../assets/Wallpapers/53119022025178.jpg"

/* Buttons volume, indicador volume and power */
import BorderButtons from "./BorderButtons"
import VolumeIndicator from "./volumeIndicator"
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
  return (
    <>
      <div className={`screen-cellPhone-wallpaper ${power ? "on" : "off"}`}>

        <img className="image-wallpaper" src={wallpaper1} alt="Wallpaper" />

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