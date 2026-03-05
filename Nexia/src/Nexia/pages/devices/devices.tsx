/* Phone */
import PhoneSys from "../../PhoneSystem/PhoneSys"

/* Images */
import rose from "../../../assets/Nexia/rose.svg"
import calculator from "../../../assets/Apps/calculator.svg"
import calendar from "../../../assets/Apps/calendar.svg"
import contact from "../../../assets/Apps/contact.svg"
import folder from "../../../assets/Apps/folder.svg"
import gallery from "../../../assets/Apps/gallery.svg"
import clock from "../../../assets/Apps/clock.svg"
import message from "../../../assets/Apps/message.svg"
import notes from "../../../assets/Apps/notes.svg"



/* Render */
const DeviceRender = () => {
  /* Apps icons */
  type Apps = {
    src: string,
    alt: string
  }
  const apps: Apps[] = [
    { src: calculator, alt: "Calculadora"},
    { src: calendar, alt: "Calendario"},
    { src: contact, alt: "Contacto"},
    { src: folder, alt: "Archivos"},
    { src: gallery, alt: "Galeria"},
    { src: clock, alt: "Reloj"},
    { src: message, alt: "Mensajes"},
    { src: notes, alt: "Notas" }, 
  ]



  return (
    <>
      <div className="container-main-phone">

        {/* Nexia Rose, text */}
        <section className="box-phone-a">
          <div className="box-title-phone">
            <img className="rose-phone" src={rose} alt="Nexia rose" />
          </div>
        </section>


        {/* CellPhone */}
        <section className="box-phone-b">
          <PhoneSys />
        </section>


        {/* Context of the phone */}
        <section className="box-phone-c">
          <div className="box-phone-C1">
            <div className="box-text-phone-C1">
              <h3 className="content-text-phone-C1a">Aplicaciones disponibles</h3>
              
              <br />
              
              <p className="content-text-phone-C1b">
                El dispositivo movil de Nexia cuenta con un conjunto de aplicaciones integradas que simulan las funciones esenciales de un telefono real. 
                Entre ellas se incluyen calculadora, ToDo, notas, configuracion, clima, archivos, reloj y otras utilidades del sistema.
              </p>
              
              <br />
              
              <p className="content-text-phone-C1b">
                Cada una de estas aplicaciones es completamente funcional y permite al usuario interactuar de forma realista, ya sea gestionando tareas, 
                creando notas, explorando archivos, consultar el reloj o ajustar la configuracion del dispositivo. Todo el entorno esta diseñado 
                para ofrecer una experiencia coherente e intuitiva, similar al uso de un dispositivo movil fisico.
              </p>
            </div>
          </div>

          {/* Icons */}
          <div className="box-phone-C2">
            <div className="box-contain-image-phone-C2">

              {apps.map((icon, i) => (
                <div key={i} className="contain-image-phone-C2">
                  <img className="image-phone-C2" src={icon.src} alt={`Image of the ${icon.alt}`} />
                </div>
              ))}

            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default DeviceRender