/* Hooks */
import { useState } from "react"


/* Images wallpapers */
import wallpaper1 from "../../assets/Wallpapers/53119022025178.jpg"

/* Icons */
import camera from "../../assets/Icons/Camera.svg"
import square from "../../assets/Icons/square_light.svg"
import circle from "../../assets/Icons/cirlce_light.svg"
import triangle from "../../assets/Icons/triangleArrow_light.svg"
import Bmore from "../../assets/Icons/more.svg"
import Bless from "../../assets/Icons/less.svg"
import Bpower from "../../assets/Icons/power.svg"



/* Render */
const CellPhone = () => {
  const [power, setPower] = useState<boolean>(false)
  const [locked, setLocked] = useState<boolean>(false)

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
              </div>
              
            </div>
          </div>
          
          {/* Camera */}
          <img className="camera-cellPhone" src={camera} alt="Camera" />

          {/* Buttons */}
          <div className="button-cellPhone-more" />
          <div className="button-cellPhone-less" />
          <div className="Button-cellPhone-power" onClick={handlePowerOnOff} />


          {/* top and bottom edge of the cell phone */}
          <div className="container-cellPhone-border-top">
          
          </div>
          <div className="container-cellPhone-border-bottom">

          </div>

          {/* Signal: Line, more, less, power */}
          <div className="signal-line-cellPhone-more">
            <div className="signal-circle-cellPhone" />
            <div className="signal-circle-cellPhone2" />
            
            <div className="container-signal-image-more">
              <img className="image-signal" src={Bmore} alt="More" />
            </div>
          </div>
          <div className="signal-line-cellPhone-less">
            <div className="signal-circle-cellPhone" />
            <div className="signal-circle-cellPhone2" />
            
            <div className="container-signal-image-less">
              <img className="image-signal" src={Bless} alt="Less" />
            </div>
          </div>
          <div className="signal-line-cellPhone-power">
            <div className="signal-circle-cellPhone" />
            <div className="signal-circle-cellPhone2" />
            
            <div className="container-signal-image-power">
              <img className="image-signal" src={Bpower} alt="Power" />
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default CellPhone