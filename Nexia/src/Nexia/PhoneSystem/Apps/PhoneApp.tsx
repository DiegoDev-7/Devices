/* Images */
import phone from "../../../assets/Apps/phone.svg"
import user from "../../../assets/Icons/user_light.svg"



/* Render */
type Props = {
  onBack: () => void
}
const PhoneApp = ({ onBack }: Props) => {
  return (
    <>
      <div className="Container-app-screen-phone">

        {/* Contact */}
        <div className="contain-app-phone-a">
          <div className="box-app-phone-contact">

            <div className="app-phone-image">
              <img src={user} alt="Image user" />
            </div>

            <div className="app-phone-contact">
              <h2>Nombre contacto</h2>
              <p>numero telefonico</p>
            </div>

          </div>
        </div>
        
        {/* Numbers */}
        <div className="contain-app-phone-b">
          <div className="box-app-text-phone">

            <p>4545415645</p>

            <div className="box-delete-phone">
              x
            </div>

          </div>
          <div className="box-app-buttons-phone">

            <div className="contain-app-button-phone">
              <button className="button-app-phone">1</button>
            </div>
            <div className="contain-app-button-phone">
              <button className="button-app-phone">2</button>
            </div>
            <div className="contain-app-button-phone">
              <button className="button-app-phone">3</button>
            </div>

            <div className="contain-app-button-phone">
              <button className="button-app-phone">4</button>
            </div>
            <div className="contain-app-button-phone">
              <button className="button-app-phone">5</button>
            </div>
            <div className="contain-app-button-phone">
              <button className="button-app-phone">6</button>
            </div>

            <div className="contain-app-button-phone">
              <button className="button-app-phone">7</button>
            </div>
            <div className="contain-app-button-phone">
              <button className="button-app-phone">8</button>
            </div>
            <div className="contain-app-button-phone">
              <button className="button-app-phone">9</button>
            </div>

            <div className="contain-app-button-phone"> 
              <button className="button-app-phone">*</button>
            </div>
            <div className="contain-app-button-phone">
              <button className="button-app-phone">0</button>
            </div>
            <div className="contain-app-button-phone">
              <button className="button-app-phone">#</button>
            </div>
          </div>

          <div className="contain-app-button-phone">
            <button className="button-app-phone-call">
              <img className="image-app-phone-call" src={phone} alt="phone" />
            </button>
          </div>

        </div>
        
      </div>
    </>
  )
}

export default PhoneApp