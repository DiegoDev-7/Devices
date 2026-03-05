/* Hooks */
import { useCallback, useState } from "react"

/* Buttons: Back and Toggle */
import { BackButton } from "../ui/BackButton"
import { ButtonToggle } from "../ui/ButtonToggle"



/* Bluetooth in phone settings */
/* Sixth option in the settings */
export const Bluetooth = ({ back }: any) => {
  // Status control options for the buttons
  const [toggles, setToggles] = useState<Record<number, boolean>>({ 1: true, 2: true })

  // Toggle option button
  const handleOption = useCallback((id: number) => {
    setToggles(prev => ({
      ...prev,
      [id]: !prev[id],
    }))
  }, [])


  // Render text
  type Description = {
    id: number
    text: string

  }
  const TextDesc: Description[] = [
    { id: 1, text: "Bluetooth" },
    { id: 2, text: "Actividad" },
    { id: 3, text: "Nombre del dispositivo" },
  ]


  return (
    <>
      <div className="contain-bluetooth">

        <BackButton back={back} text="Bluetooth" />

        <div className="box-option-bluetooth">

          {TextDesc.map(v => (
            <div key={v.id} className="card-option-bluetooth">
              <div className="description-option-blueetooth">
                <p>{v.text}</p>
              </div>

              <div className="button-option-blueetooth">
                {v.id !== 3 ? (
                  <ButtonToggle value={!toggles[v.id]} onChange={() => handleOption(v.id)} />
                ) : (
                  <p>NEXIA Global</p>
                )}
              </div>
            </div>
          ))}

        </div>

      </div>
    </>
  )
}