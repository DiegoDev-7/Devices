import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer className="cntnrFooter">
        
        <p>&copy; Nexia 2026. Todos los derechos reservados.</p>
        
        <Link className="lnkFooter" to="/terminos">
          Terminos y condiciones
        </Link>
        
      </footer>
    </>
  )
}

export default Footer