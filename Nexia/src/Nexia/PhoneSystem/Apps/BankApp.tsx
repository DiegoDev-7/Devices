/* Hooks */
import { useState } from "react"

/* Image */
import sim from "../../../assets/Apps/simcard_light.svg"
import eye from "../../../assets/Icons/eye.svg"
import eyeclose from "../../../assets/Icons/eye_close.svg"
import visa_light from "../../../assets/Icons/visa_light.svg"


/* Render */
type Props = {
  onBack: () => void
}
const BankApp = ({ onBack }: Props) => {
  const cash = 5000
  const [money, setMoney] = useState<boolean>(false)
  const [eyeb, setEyeb] = useState<boolean>(false)
  const [viewCard, setViewCard] = useState<boolean>(false)


  /* Button to change eye and text */
  const handleEye = () => {
    setEyeb(prev => !prev)
    setMoney(prev => !prev)
  }
  const handleCard = () => {
    setViewCard(prev => !prev)
  }
 


  return (
    <>
      <div className="Container-app-bank">

        <div className="box-app-screen-bank-a">
          
          <h3>Deposito</h3>

          <button className="button-app-screen-bank-eye" onClick={handleEye}>
            <img className="image-app-screen-eye" src={eyeb ? eye : eyeclose} alt="eye" />
          </button>

          <span>$ {money ? cash : "*".repeat(5)}</span>

          <p>Total $ {cash}</p>

        </div>

        <div className="box-app-screen-bank-b">

          <button className="button-app-screen-bank">Retirar</button>

          {/* Card */}
          {viewCard && (
            <>
              <div className="contain-app-card-bank">
              <h2 className="title-app-card-bank">World Elite</h2>
              <div className="box-app-card-sim">
                <img className="image-card-sim" src={sim} alt="Prototipo sim" />
              </div>
              <div className="box-app-card-visa">
                <img className="image-card-visa" src={visa_light} alt="Visa" />
              </div>
              <p className="text-app-card">5454 2315 5648 2541 5456</p>
              <p className="text-app-card">12/29</p>
              <p className="text-app-card">Diego R.</p>
            </div>
            </>
          )}

          <p className="text-view-card-bank" onClick={handleCard}>{viewCard ? "Volver" : "Ver tarjeta"}</p>

        </div>

      </div>
    </>
  )
}

export default BankApp