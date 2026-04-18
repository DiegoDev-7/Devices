/* React */
import { Link } from "react-router-dom";

/* Images */
import danger from "../../../../assets/Wallpappers/danger.png"



/* Frame */
export const SelectDevice = () => {
  const token = localStorage.getItem("token")
  const bankAccount = localStorage.getItem("bank_account")

  // Render text and link
  type Description = {
    id: number
    title: string
    text: string
    link: string
    requiresBank: boolean
  }
  const devices: Description[] = [
    {
      id: 1,
      title: "Dispositivo móvil",
      text: "Sistema operativo interactivo con aplicaciones conectadas y comportamiento dinámico.",
      link: "/Phone",
      requiresBank: false
    },
    {
      id: 2,
      title: "ATM",
      text: "Interfaz externa vinculada al sistema bancario interno del teléfono, permitiendo sincronización de datos en tiempo real.",
      link: "/ATM",
      requiresBank: true
    }
  ]

  

  return (
    <>
      <section id="devices" className="container-devices">

        <div className="contain-devices">
          <div className="box-devices">

            <h2>Dispositivos</h2>

            <br />

            <p>Nexia no se limita al entorno móvil. El sistema incluye un ATM conectado directamente con la aplicación bancaria del dispositivo.</p>

            {devices.map((device) => {
              const isLogged = !!token
              const hasBank = !!bankAccount

              const blockedByAuth = !isLogged
              const blockedByBank = device.requiresBank && !hasBank

              const isBlocked = blockedByAuth || blockedByBank

              let message = ""

              if (blockedByAuth) {
                message = "Necesitas iniciar sesión o registrarte para usar los dispositivos"
              } else if (blockedByBank) {
                message = "Debes crear una cuenta bancaria para usar el ATM"
              }

              return (
                <Link
                  key={device.id}
                  className="link-devices"
                  to={isBlocked ? "#" : device.link}
                  onClick={(e) => {
                    if (isBlocked) e.preventDefault()
                  }}
                >

                  <div className={isBlocked ? "blur-layer" : ""}>
                    <h3>{device.title}</h3>
                    <p>{device.text}</p>
                  </div>

                  {isBlocked && (
                    <div className="container-danger">
                      <img
                        className="image-danger"
                        src={danger}
                        alt="bloqueado"
                      />

                      <p>{message}</p>
                    </div>
                  )}

                </Link>
              )
            })}

          </div>
        </div>

      </section>
    </>
  )
}