/* Hooks */
import { useEffect, useState } from "react"

/* Buttons: Back and Toggle */
import { BackButton } from "../ui/BackButton"
import { ButtonToggle } from "../ui/ButtonToggle"



/* Privacity in phone settings */
/* Eleventh option in the settings */
export const Privacity = ({ back }: any) => {
  // Control option
  const [option, setOption] = useState<boolean>(() => {
    const saved = localStorage.getItem("privacity_option")
    return saved !== null ? JSON.parse(saved) : true
  })

  // Toggle option button
  const handleOption = () => {
    setOption(prev => !prev)
  }

  // Save
  useEffect(() => {
    localStorage.setItem("privacity_option", JSON.stringify(option))
  }, [option])



  return (
    <>
      <div className="contain-privacity">

        <BackButton back={back} text="Privacidad" />

        <div className="box-text-privacity">

          <div className="contain-option-privacity">
            <div className="box-text-privacity">
              <p>Uso y diagnóstico</p>
            </div>

            <div className="box-button-privacity">
              <ButtonToggle value={!option} onChange={handleOption} />
            </div>
          </div>

          <p>
            Ayuda a mejorar la experiencia con dispositivos Nexia enviando automáticamente a Nexia datos de diagnóstico y uso del dispositivo y las apps.
            Esta información ayudará a mejorar la duración del desarrollo la estabilidad de las apps y el sistema, y mucho más.
            Algunos datos agregados también serán útiles para las apps. Tanto como para los desarolladores adicionalmente habilitarse la Actividad web y de
            aplicaciones adicionales, es posible que se almacenen estos datos en tu cuenta.
          </p>
          
          <br />

          <p>
            Esta información general sobre tu dispositivo y cómo lo usas (por ejemplo, los errores y la actividad de las apps y el sistema). Los datos se
            usarán para mejorar los dispositivos Android, y parte de la información agregada también será útil para las apps, como los desarrolladores del SO
            (Sistema Operativo) de nexia que desean mejorar las apps y el producto final.
          </p>

          <br />

          <p>
            Desactivar esta función no afectará la capacidad de tu dispositivo de enviar la información necesaria para servicios esenciales como seguridad y 
            actualizaciones del sistema.
          </p>
        </div>

      </div>
    </>
  )
}