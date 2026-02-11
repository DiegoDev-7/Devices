/* Images */
import user from "../../../assets/Icons/user_light.svg"



/* Render */
type Props = {
  onBack: () => void
}
const ContactApp = ({ onBack }: Props) => {
  return (
    <>
      <div className="Container-app-screen-contact">
        <div className="box-app-screen-contact">

          <h3 className="title-contact">Contactos</h3>

          <div className="contain-app-screen-contact">
            <div className="box-image-contact">
              <img className="image-contact" src={user} alt="Imagen de usuario" />
            </div>

            <div className="box-text-contact">
              <h3>Contacto</h3>
              <p>Numero de telefono</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default ContactApp