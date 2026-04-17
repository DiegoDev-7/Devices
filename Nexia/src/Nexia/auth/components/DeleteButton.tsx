/* Auth */
import { useAuth0 } from "@auth0/auth0-react"

/* Services */
import { deleteGoogle } from "../../services/external/auth/auth.service"



/* Button delete account */
export default function DeleteAccountButton() {
  // Auth
  const { isAuthenticated, logout } = useAuth0()


  // Delete account 
  const handleDelete = async () => {

    if (!isAuthenticated) return

    try {

      await deleteGoogle()

      localStorage.removeItem("token")
      localStorage.removeItem("notes")
      localStorage.removeItem("atm_boot_done")

      logout({
        logoutParams: {
          returnTo: window.location.origin
        }
      })

    } catch (error: any) {
      
      throw new Error(error.response?.data?.error || "Error al iniciar sesión con google")
      
    }

  }



  return (
    <div className="container-delete-account">

      <button onClick={handleDelete} className="delete-account-btn">

        <span>Eliminar cuenta</span>

      </button>

    </div>
  )
}