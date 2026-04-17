/* Hooks */
import { useCallback, useState } from "react"

/* Buttons: Back and Toggle */
import { BackButton } from "../ui/BackButton"
import { ButtonToggle } from "../ui/ButtonToggle"



/* Screen in phone settings */
/* Seventh option in the settings */
export const Screen = ({ back }: any) => {
  // Control option
  const [options, setOptions] = useState<boolean>(false)

  // Toggle option button
  const handleOption = useCallback(() => {
    setOptions(prev => !prev)
  }, [])


  return (
    <>
      <div className="contain-screen">

        <BackButton back={back} text="Pantalla" />

        <div className="box-options-settings-screen">

          <div className="options-settings-screen">
            <div className="option-text-settings-screen">
              <p>Modo oscuro</p>
              <p>Cambie a una interfaz de usuario con poca luz que muestre principalmente superficies oscuras</p>
            </div>

            <div className="option-button-settings-screen">
              <ButtonToggle value={!options} onChange={handleOption} />
            </div>
          </div>

        </div>

      </div>
    </>
  )
}