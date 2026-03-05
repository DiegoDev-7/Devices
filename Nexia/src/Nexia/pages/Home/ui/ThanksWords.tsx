/* Images */
import heart from "../../../../assets/Icons/heart.svg"



/* Frame */
export const ThanksWords = () => {
  return (
    <>
      <section id="gratitude" className="container-gratitude">

        <div className="contain-gratitude">
          <div className="box-gratitude">
            <img src={heart} alt="Imagen corazón" />
          </div>
          
          <h2>Gracias por explorar Nexia</h2>

          <p>
            Nexia es un proyecto de uso completamente gratuito. Todas sus funcionalidades estan disponibles sin costos ocultos, 
            suscripciones ni pagos obligatorios.
          </p>
          
          <p>Este proyecto representa diseño, arquitectura y ejecución técnica. Un sistema completo desarrollado en la web.</p>

          <p>
            El objetivo del proyecto es ofrecer una herramienta accesible para cualquier persona, permitiendo el uso libre de los dispositivos 
            virtuales directamente desde el navegador. Nexia siempre sera gratuito y estara enfocado en brindar una experiencia abierta, 
            simple y sin barreras para los usuarios.
          </p>
          
        </div>

      </section>
    </>
  )
}