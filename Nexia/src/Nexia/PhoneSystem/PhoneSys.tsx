/* Hooks */
import { useState, useRef } from "react"

/* Images wallpapers */
import wallpaper1 from "../../assets/Wallpapers/53119022025178.jpg"

/* Icons */
import camera from "../../assets/Icons/Camera.svg"
import square from "../../assets/Icons/square_light.svg"
import circle from "../../assets/Icons/cirlce_light.svg"
import triangle from "../../assets/Icons/triangleArrow_light.svg"
import clock from "../../assets/Icons/clock.svg"

/* ui components */
import SignalGroup from "../PhoneSystem/ui/Signals/SignalGroup"


/* Render */
const CellPhone = () => {
  /* Turn on/off for the phone with timer */
  const [power, setPower] = useState<boolean>(false)
  const [locked, setLocked] = useState<boolean>(false)

  /* Raise or lower the phone's volume using the buttons */
  let randomSound = Math.floor(Math.random() * 100)
  const [volume, setVolume] = useState<number>(randomSound) 
  const [showVolume, setShowVolume] = useState<boolean>(false)
  const [closingVolume, setClosingVolume] = useState<boolean>(false)
  const hideTimer = useRef<number | null>(null)
  const closeTimer = useRef<number | null>(null)

  /* Timer for volume input and output */
  const showVolumeTemporarily = () => {
    setShowVolume(true)
    setClosingVolume(false)

    if (hideTimer.current) clearTimeout(hideTimer.current)
    if (closeTimer.current) clearTimeout(closeTimer.current)


    hideTimer.current = window.setTimeout(() => {
      setClosingVolume(true)

      closeTimer.current = window.setTimeout(() => {
        setShowVolume(false)
        setClosingVolume(false)
      }, 300)
    }, 2000)
  }

  /* Buttons to the increase and decrease volume */
  const increaseVolume = () => {
    setVolume(v => Math.min(100, v + 10))
    showVolumeTemporarily()
  }
  const decreaseVolume = () => {
    setVolume(v => Math.max(0, v - 10))
    showVolumeTemporarily()
  }


  /* Button to turn the phone on/off */
  const handlePowerOnOff = () => {
    if (locked) return
    
    setLocked(true)
    setPower(prev => !prev)

    setTimeout(() => {
      setLocked(false)
    }, 2000)
  }



  return (
    <>
      <div className="container-nexia-cellPhone">
        {/* CellPhone */}
        <div className="container-cellPhone-border">

          {/* Screen */}
          <div className="display-cellPhone">
            <div className="screen-cellPhone">

              <div className={`screen-cellPhone-wallpaper ${power ? "on" : "off"}`}>
                
                <img className="image-wallpaper" src={wallpaper1} alt="Image Wallpaper" />
                    
                {power && (
                  <>
                    {/* Touch buttom square, circle, triangle */}
                    <div className="screen-touch-cellPhone-buttons">
                      <button className="button-screen-cellPhone">
                        <img className="image-screen-touch-square" src={square} alt="square" />
                      </button>
                      <button className="button-screen-cellPhone">
                        <img className="image-screen-touch-circle" src={circle} alt="circle" />
                      </button>
                      <button className="button-screen-cellPhone">
                        <img className="image-screen-touch-triangle" src={triangle} alt="triangle" />
                      </button>
                    </div>
                  </>
                )}

                {showVolume && (
                  <div className={`container-volume ${closingVolume ? "out" : "in"}`}>
                    <div className="volume-bar">
                      <div className="volume-bar-fill" style={{ width: `${volume}%` }} />
                      <img className="image-bar-fill-clock" src={clock} alt="clock" />
                    </div>
                  </div>
                )}

              </div>
              
            </div>
          </div>
          
          {/* Camera */}
          <img className="camera-cellPhone" src={camera} alt="Camera" />

          {/* Buttons */}
          <div className="button-cellPhone-more" onClick={increaseVolume} />
          <div className="button-cellPhone-less" onClick={decreaseVolume} />
          <div className="Button-cellPhone-power" onClick={handlePowerOnOff} />


          {/* top and bottom edge of the cell phone */}
          <div className="container-cellPhone-border-top">
          
          </div>
          <div className="container-cellPhone-border-bottom">

          </div>

          {/* Signal: Line, more, less, power */}
          <SignalGroup />
          
        </div>
      </div>
    </>
  )
}

export default CellPhone
