/* Back Button */
import { BackButton } from "../ui/BackButton"

/* Images Apps */
import calculator from "../../../../../assets/Apps/calculator.svg"
import chat from "../../../../../assets/Apps/chat.svg"
import folder from "../../../../../assets/Apps/folder.svg"
import clock from "../../../../../assets/Apps/clock.svg"
import bank from "../../../../../assets/Apps/bank.svg"
import Simsons from "../../../../../assets/Apps/Simsons.jpg"
import pimp from "../../../../../assets/Icons/pimp_light.svg"



/* Security in phone settings */
/* Third option in the settings */
export const SecurityStatus = ({ back }: any) => {
  // Render images
  type ImagesT = {
    id: number
    src: string
    alt: string
  }
  const Images: ImagesT[] = [
    { id: 1, src: calculator, alt: "Calculadora" },
    { id: 2, src: chat, alt: "Mensajes" },
    { id: 3, src: folder, alt: "Carpeta" },
    { id: 4, src: clock, alt: "Reloj" },
    { id: 5, src: bank, alt: "Banco" },
    { id: 6, src: Simsons, alt: "Simpsons" },
  ]



  return (
    <>
      <div className="contain-securityStatus">

        <BackButton back={back} text="Estado de seguridad" />

        <div className="box-content-securityStatus-aboutPhone">
          <div className="box-security-circle-aboutPhone">
            <img src={pimp} alt="Image protect" />
          </div>

          {Images.map(v => (
            <div key={v.id} className="box-apps-securityStatus-aboutPhone">
              <img className="icon-securityStatus-aboutPhone" src={v.src} alt={v.alt} />
            </div>
          ))}

          <p className="text-aditional-securityStatus-aboutPhone">+11 Apps</p>

          <div className="box-content-text-securityStatus">
            <div className="box-text-divisor">
              <p className="text-a">Actualización de seguridad</p>
            </div>
            <div className="box-text-divisor">
              <p className="text-b">2026-02-27</p>
            </div>
            <div className="box-text-divisor">
              <p className="text-a">Actualización del sistema</p>
            </div>
            <div className="box-text-divisor">
              <p className="text-b">2026-02-27</p>
            </div>
            <div className="box-text-divisor">
              <p className="text-a">Sistema contra riezgos de virus</p>
            </div>
            <div className="box-text-divisor">
              <p className="text-b">Activado</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}