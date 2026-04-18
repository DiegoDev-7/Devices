import { Navigate } from "react-router-dom"

/* Phone */
import AtmSys from "../../SystemAtm/AtmSys"

/* Images */
import rose_light from "../../../assets/Nexia/rose_light.svg"



/* Render */
const DeviceatmRender = () => {
  // If the user has a token, enter the page; otherwise not
  const bankAccount = localStorage.getItem("bank_account")
  
  if (!bankAccount) return <Navigate to="/" />



  return (
    <>
      <div className="container-main-atm">

        {/* Nexia Rose, text */}
        <section className="box-atm-a">
          <div className="box-image-atm-rose">
            <img src={rose_light} alt="Nexia rose" />
          </div>
        </section>


        {/* Cellatm */}
        <section className="box-atm-b">

          <AtmSys />

        </section>


        {/* Context of the atm */}
        <section className="box-atm-c">

          <div className="atm-info">

            <h3>ATM Inteligente</h3>

            <p>
              Este dispositivo permite autenticarte mediante tu tarjeta bancaria para acceder de forma segura a tu cuenta.
            </p>

            <p>
              Una vez dentro, podrás enviar dinero de regreso al banco, transferir fondos a otros usuarios utilizando su número telefónico, 
              y gestionar tus operaciones financieras de manera directa desde el dispositivo.
            </p>

            <p>
              También tendrás acceso a la consulta de saldo tanto en tu cuenta bancaria como en el ATM, 
              así como un historial detallado de todas las transacciones realizadas.
            </p>

          </div>

        </section>

      </div>
    </>
  )
}

export default DeviceatmRender