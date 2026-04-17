import { Link } from "react-router-dom"



/* Render footer */
const Footer = () => {
  return (
    <>
      <footer className="cntnrFooter">
        
        <p>&copy; Nexia 2026. Todos los derechos reservados.</p>
        
        <Link className="lnkFooter" to="/terms">
          Terminos y condiciones
        </Link>
        
      </footer>
    </>
  )
}

export default Footer