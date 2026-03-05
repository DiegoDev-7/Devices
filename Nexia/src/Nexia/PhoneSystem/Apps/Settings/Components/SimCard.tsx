/* Buttons: Back and Toggle */
import { BackButton } from "../ui/BackButton"
import { ButtonToggle } from "../ui/ButtonToggle"

/* Images */
import simcard from "../../../../../assets/Icons/simcard_light.svg"
import { useCallback, useState } from "react"



/* Sim card in phone settings */
/* Fourd option in the settings */
export const SimCard = ({ back }: any) => {
  // SIM options for the buttons
  const [option, setOption] = useState<Record<number, boolean>>({ 1: true, 2: true, 3: true })


  // SIM toggle option
  const handleToggle = useCallback((id: number) => {
    setOption(prev => ({
      ...prev,
      [id]: !prev[id],
    }))
  }, [])
  

  // Render text
  type Content = {
    id: number
    text: string
  }
  const TextContent: Content[] = [
    { id: 1, text: "SIM de datos" },
    { id: 2, text: "Datos móviles" },
    { id: 3, text: "Roaming de datos" },
  ]



  return (
    <>
      <div className="contain-simcard">

        <BackButton back={back} text="Tarjeta Sim" />

        <div className="box-content-simcard">
          
          <div className="box-sim-simcard">
            <div className="card-simcard">
              <img className="image-simcard" src={simcard} alt="Sim card" />
              <p>Clara</p>
              <p>5456415645</p>
            </div>
          </div>

          <div className="box-data-simcard">
            {TextContent.map(v => (
              <div key={v.id} className="box-options-simcard">
                <div className="contain-text-data-simcard">
                  <p>{v.text}</p>
                </div>
                <div className="contain-button-data-simcard">
                  <ButtonToggle 
                    value={!option[v.id]} 
                    onChange={() => handleToggle(v.id)} 
                  />
                </div>
              </div>
            ))}
          </div>
          
        </div>
        
      </div>
    </>
  )
}