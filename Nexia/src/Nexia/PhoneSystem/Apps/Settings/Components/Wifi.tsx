/* Hooks */
import { useCallback, useState } from "react"

/* Buttons: Back and Toggle */
import { BackButton } from "../ui/BackButton"
import { ButtonToggle } from "../ui/ButtonToggle"

/* Images */
import wifi from "../../../../../assets/Icons/Wifi_light.svg"



/* Wifi in phone settings */
/* Fifth option in the settings */
export const Wifi = ({ back }: any) => {
  // Control option
  const [cardWifi, setCardWifi] = useState<boolean>(true)
  
  // Toggle view wifi
  const handleCardWifi = useCallback(() => {
    setCardWifi(prev => !prev)
  }, [])



  return (
    <>
      <div className="contain-wifi">

        <BackButton back={back} text="Wi-Fi" />

        <div className="box-card-red-wifi">
          <div className="box-option-red-wifi">
            <p>Wi-Fi</p>
          </div>
          <div className="box-option-red-wifi">
            <ButtonToggle 
              value={!cardWifi} 
              onChange={handleCardWifi}
            />
          </div>
        </div>

        {cardWifi && (
          <div className="box-card-red-wifi">
            <div className="card-red-wifi">
              <div className="card-wifi-red-wifi">
                <img src={wifi} alt="Wifi" />
              </div>
              <div className="card-text-red-wifi">
                <p>Contectado</p>
                <p>Estado de red seguro</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  )
}