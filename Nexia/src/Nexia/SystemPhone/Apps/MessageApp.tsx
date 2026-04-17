/* Image */
import nexia from "../../../assets/Nexia/NexiaWhite.svg"



/* Render */
const MessageApp = () => {
  return (
    <>
      <div className="messages-container">

        <h3 className="messages-title">Mensajes</h3>

        <div className="messages-list">

          <div className="message-item">

            <div className="message-avatar">
              <img src={nexia} alt="nexia logo" />
            </div>

            <div className="message-content">
              <div className="message-header">
                <h4>Nexia</h4>
                <span>15/04/2026</span>
              </div>

              <p className="message-text">
                Nexia OS lanzamiento.
              </p>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default MessageApp