/* Back Button */
import { BackButton } from "../ui/BackButton"

/* Images */
import nexia from "../../../../../assets/Nexia/Nexia.svg"



/* Security in phone settings */
/* Tenth option in the settings */
export const Security = ({ back }: any) => {
  return (
    <>
      <div className="contain-security">
        
        <BackButton back={back} text="Políticas de seguridad" />

        <div className="box-text-security">

          <div className="contain-image-security">
            <img src={nexia} alt="Nexia logo" />
          </div>

          <h3>Seguridad</h3>
          <p>
            Controla y protege tu cuenta y tu informacion desde este apartado. 
            Aqui puedes gestionar las opciones relacionadas con Permisos de aplicaciones, 
            privacidad, proteccion de datos, Compromisos de Nexia
            para garantizar un acceso seguro 
            y mantener el control sobre tu actividad.
          </p>

          <br />

          <h3>Permisos de aplicaciones</h3>
          <p>Gestiona que apps internas pueden acceder a ciertos modulos.</p>
          <ul>
            <li>Acceso a datos del sistema</li>
            <li>Acceso a almacenamiento virtual</li>
            <li>Acceso a moneda virutal</li>
            <li>Acceso a historial de transacciones virtual (en el banco)</li>
            <li>Acceso a red</li>
          </ul>

          <br />

          <h3>Privacidad</h3>
          <p>Define que informacion es visible y como se utiliza dentro de la plataforma.</p>

          <br />

          <h3>Proteccion de datos</h3>
          <p>Asegura la integridad y confidencialidad de la informacion almacenada.</p>
          <ul>
            <li>Cifrado de datos sensibles.</li>
            <li>Descarga de datos personales.</li>
            <li>Eliminacion permanente de la cuenta.</li>
          </ul>

          <br />

          <h3>Compromisos de Nexia</h3>
          <ul>
            <li>No vendemos datos.</li>
            <li>No compartimos informacion con terceros.</li>
            <li>No implementamos rastreadores ocultos.</li>
            <li>No realizamos mineria de datos.</li>
            <li>No accedemos al contenido personal del usuario.</li>
          </ul>

          <br />

          <h3>Tratamiento de informacion</h3>
          <ul>
            <li>Los datos se almacenan localmente cuando es posible.</li>
            <li>Si existe conexion a servidor, solo se procesa lo estrictamente necesario para el funcionamiento del sistema.</li>
            <li>No se realiza perfilamiento de comportamiento.</li>
          </ul>

          <br />

          <h3>Transparencia</h3>
          <p>
            Nexia prioriza un entorno cerrado y controlado. 
            El usuario mantiene el control total sobre su informacion y puede eliminarla en cualquier momento desde la configuracion del sistema.
          </p>

        </div>
        
      </div>
    </>
  )
}