/* Hooks */
import { useCallback, useState } from "react"

/* Buttons: Back and Toggle */
import { BackButton } from "../ui/BackButton"
import { ButtonToggle } from "../ui/ButtonToggle"



/* Control center and comments in phone settings */
/* Nineth option in the settings */
export const ControlCenter = ({ back }: any) => {
  // Status control options for the buttons
  const [toggles, setToggles] = useState<Record<number, boolean>>({ 1: true, 2: true, 3: true })
  

  // Toggle option button
  const handleOption = useCallback((id: number) => {
    setToggles(prev => ({
      ...prev,
      [id]: !prev[id],
    }))
  }, [])


  // Render text
  type Options = {
    id: number
    text: string
  }
  const options: Options[] = [
    { id: 1, text: "Mostrar hora" },
    { id: 2, text: "Mostrar volumen" },
    { id: 3, text: "Red de descarga" },
  ]


  
  return (
    <>
      <div className="contain-controlCenter">
        
        <BackButton back={back} text="Centro de control" />

        <p className="title-controlCenter">Barra de estado</p>

        <div className="box-options-controlCenter">

          {options.map(v => (  
            <div key={v.id} className="card-controlCenter">
              <div className="contain-text-controlCenter">
                <p>{v.text}</p>
              </div>

              <div className="contain-button-controlCenter">
                <ButtonToggle 
                  value={!toggles[v.id]} 
                  onChange={() => handleOption(v.id)} 
                />
              </div>
            </div>
          ))}

        </div>

      </div>
    </>
  )
}