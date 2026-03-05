/* React */
import { Link } from "react-router-dom";



/* Frame */
export const SelectDevice = () => {
  // Render text and link
  type Description = {
    id: number
    title: string
    text: string
    link: string
  }
  const selectDevice: Description[] = [
    { id: 1, title: "Dispositivo móvil", text: "Sistema operativo interactivo con aplicaciones conectadas y comportamiento dinámico.", link: "/Phone" },
    { id: 2, title: "ATM", text: "Interfaz externa vinculada al sistema bancario interno del teléfono, permitiendo sincronización de datos en tiempo real.", link: "/ATM" },
  ]



  return (
    <>
      <section id="devices" className="container-devices">

        <div className="contain-devices">
          <div className="box-devices">

            <h2>Dispositivos</h2>

            <br />

            <p>Nexia no se limita al entorno móvil. El sistema incluye un ATM conectado directamente con la aplicación bancaria del dispositivo.</p>

            {selectDevice.map(v => (
              <Link key={v.id} className="link-devices" to={v.link}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Link>
            ))}

          </div>
        </div>

      </section>
    </>
  )
}