/* Profile option */
export default function Profile() {
  return (
    <div className="container-settings-section">
      <div className="panel-section profile-section">

        <h2>Perfil</h2>

        <div className="profile-intro">
          <p>
            En tu perfil podrás acceder a herramientas del sistema, gestionar
            configuraciones personales y utilizar servicios como el banco,
            el cajero automático y otras aplicaciones disponibles dentro
            del entorno Nexia.
          </p>
        </div>

        <div className="profile-features">

          <div className="profile-feature">
            <h4>Aplicaciones</h4>
            <p>
              Accede a las aplicaciones disponibles dentro del sistema
              y navega entre ellas desde la interfaz móvil.
            </p>
          </div>

          <div className="profile-feature">
            <h4>Sistema Financiero</h4>
            <p>
              Consulta el estado de tu banco y realiza operaciones
              desde el cajero automático del entorno Nexia.
            </p>
          </div>

          <div className="profile-feature">
            <h4>Configuración</h4>
            <p>
              Administra la información de tu cuenta y ajusta
              las opciones disponibles en tu perfil.
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}