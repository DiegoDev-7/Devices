/* Images */
import NexiaWord from "../../../../assets/Nexia/NexiaWord.webp"
import Nexia from "../../../../assets/Nexia/NexiaWhite.svg"



/* Frame */
export const StartHome = () => {
  // Access the devices by clicking on the model view
  const goTo: any = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })
  }



  return (
    <>
      <section id="start" className="container-home">

        <div className="contain-home">

          <div className="box-home-a">

            <div className="contain-image-home">

              <img src={NexiaWord} alt="Nexia OS" />

              <div className="line-divider-home" />

            </div>

            <p>
              Un sistema operativo móvil recreado completamente en la web. Nexia no es una maqueta visual. 
              Es un entorno interactivo que simula el comportamiento real de un smartphone moderno.
            </p>

            <p>Desbloqueo de pantalla, barra de estado dinámica, panel deslizante, navegación inferior y aplicaciones conectadas entre sí.</p>

          </div>


          {/* Cards */}
          <div className="box-home-b">

            <div className="card-home">

              <div className="box-card-home a">
                <img src={Nexia} alt="Nexia" />
              </div>

              <div className="box-card-home b">
                <img src={Nexia} alt="Nexia" />
              </div>

            </div>

            <button className="button-home" onClick={() => goTo("devices")}>
              Seleccionar dispositivo
            </button>

          </div>
          
        </div>

      </section>
    </>
  )
}