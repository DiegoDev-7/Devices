/* Images */
import forward from "../../../../../assets/Icons/forward_dark.svg"

/* Back Button */
import { BackButton } from "../ui/BackButton"



/* User in phone settings */
/* Twelveth option in the settings */
export const User = ({ back }: any) => {
  type DescriptionOptions = {
    id: number
    text: string
    option: string
  }
  const Description: DescriptionOptions[] = [
    { id: 1, text: "Seguridad de la cuenta", option: "security" },
    { id: 2, text: "Nexia Cloud", option: "cloud" },
    { id: 3, text: "Sobre mi cuenta Nexia", option: "account-nexia" },
  ]



  return (
    <>
      <div className="contain-user">
        
        <BackButton back={back} text="Cuenta Nexia" />

        <div className="box-content-user">

          <div className="box-content-account-user">
            <button className="card-button-account-user">
              <div className="card-box-account-user-a">
                <img src="" alt="Imagen de perfil" />
              </div>
              <div className="card-box-account-user-b">
                <p>Nombre del usuario</p>
                <p>Correo</p>
              </div>
              <div className="card-box-account-user-c">
                <img src={forward} alt="Icono de flecha" />
              </div>
            </button>
          </div>

          <hr className="divisor-user" />

          <div className="box-options-account-user">
            <p className="title-options-user">Mi cuenta</p>
            {Description.map(v => (
              <button key={v.id} className="card-option-button-acount-user">
                <div className="option-text-account-user">
                  <p>{v.text}</p>
                </div>
                <div className="option-image-account-user">
                  <img src={forward} alt="Icono de flecha" />
                </div>
              </button>
            ))}
          </div>
          
          <hr className="divisor-user" />

          <div className="box-logout-account-user">
            <button className="button-logout-account-user">Cerrar sesión</button>
          </div>

        </div>
        
      </div>
    </>
  )
}