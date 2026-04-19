/* Images */
import google from "../../../../../assets/Apps/google.svg"

/* Components */
import DeleteAccountButton from "../../../components/DeleteButton"

/* Types */
import { type User } from "../types/user.type"



/* Section config account with google */
export const ConfigWithGoogle = ({ user }: { user: User }) => {
  // Logout
  const removeSesion = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("notes")
    localStorage.removeItem("atm_boot_done")
    localStorage.removeItem("bank_account")
    localStorage.removeItem("privacity_option")

    window.location.reload()
  }



  return (
    <>
      <div className="panel-section settings">

        <h2>Configuracion</h2>

        <div className="settings__size">

          <div className="settings__content">

            <div className="profile-card">

              <div className="profile-card__provider">
                <img src={google} alt="google" />
              </div>

              <img 
                className="profile-card__avatar"
                src={user?.avatar || user.avatar} 
                alt="profile"
              />

              <div className="profile-card__names">
                <h3>{user?.name}</h3>
                <h3>{user?.lastname}</h3>
              </div>

              <p>{user?.email}</p>

            </div>

          </div>

          <div className="settings__actions">

            <button className="btn logout" onClick={removeSesion}>
              Cerrar sesión
            </button>

            <DeleteAccountButton />

          </div>

        </div>

      </div>
    </>
  )
}