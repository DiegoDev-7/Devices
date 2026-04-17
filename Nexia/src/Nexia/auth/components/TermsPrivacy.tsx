import { Link } from "react-router-dom"



/* Terms and privacy - footer for the home, login and register */
export const TermsPrivacy = () => {
  return (
    <>
       <div className="interfaz-terms-privacy">

        <p className="terms">
          Al iniciar sesion o crear una cuenta aceptas nuestros 
          <Link to="/terms"> Terminos y Condiciones </Link> 
          y la 
          <Link to="/privacy"> Política de Privacidad</Link>.
        </p>

      </div>
    </>
  )
}