/* Image */
import user from "../../../assets/Icons/user_light.svg"



/* Render */
type Props = {
  onBack: () => void
}
const MessageApp = ({ onBack }: Props) => {
  return (
    <>
      <div className="Container-app-screen-message">

        <div className="box-app-screen-message-a">
          <h3>Mensajes</h3>
        </div>
        
        <div className="box-app-screen-message-b">
          <div className="contain-app-screen-message">

            <div className="box-image-app-message">
              <div className="box-circle-image-message">
                <img className="image-user-message" src={user} alt="Image User" />
              </div>
            </div>
            
            <div className="box-text-app-message">
              <h3 className="text-title-message">Nexia</h3>
              <p className="text-app-message">Actualizacion de nexia 0.9</p>
            </div>

          </div>
        </div>
        
      </div>
    </>
  )
}

export default MessageApp