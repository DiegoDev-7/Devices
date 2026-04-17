/* Hooks */
import { useState } from "react";



/* Render tempsAndConditions */
const TermsAndConditions = () => {
  // Copy the email
  const [emailCopied, setEmailCopied] = useState(false)

  
  // Button to copy email
  const handleEmailCopy = () => {
    navigator.clipboard.writeText("dxvvdev@gmail.com")
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }



  return (
    <section className="container-terminos">
      <div className="contain-terminos">
        <h2>Términos y condiciones de uso</h2>

        <p>
          Bienvenido a Nexia. Al acceder y utilizar este sitio web usted acepta
          quedar obligado por los presentes Términos y Condiciones de Uso. Si
          no está de acuerdo con alguno de los términos, por favor no utilice
          este sitio.
        </p>

        <h3>1. Definiciones</h3>
        <p>
          "Sitio" se refiere a la plataforma web de Nexia. "Usuario" hace
          referencia a cualquier persona que accede o utiliza el Sitio. "Contenido"
          incluye texto, imágenes, audio, vídeo, código y demás materiales
          disponibles en el Sitio.
        </p>

        <h3>2. Acceso y uso</h3>
        <p>
          El acceso al Sitio es gratuito salvo indicación contraria. El Usuario
          se compromete a utilizar el Sitio conforme a la ley, a la buena fe y a
          estos términos, absteniéndose de cualquier conducta que pueda dañar,
          inutilizar, sobrecargar o deteriorar el Sitio o impedir su normal
          disfrute por otros usuarios.
        </p>

        <h3>3. Obligaciones del usuario</h3>
        <ul>
          <li>No introducir malware, virus o cualquier código que cause daños.</li>
          <li>No registrar cuentas falsas ni suplantar a terceros.</li>
          <li>No utilizar el Sitio para fines ilícitos, difamatorios o inmorales.</li>
        </ul>

        <h3>4. Contenido y propiedad intelectual</h3>
        <p>
          Salvo indicación expresa, todo el Contenido del Sitio es titularidad
          de Nexia o de sus licenciantes y está protegido por la normativa de
          propiedad intelectual. Queda prohibida su reproducción, distribución o
          explotación sin autorización expresa.
        </p>
        <p>
          En particular, todos los iconos usados en este Sitio han sido diseñados
          y desarrollados profundamente por el autor de Nexia; no han sido
          copiados de terceros excepto los iconos utilizados para redes sociales
          (por ejemplo iconos oficiales de plataformas como X, GitHub o Discord),
          que se muestran únicamente como enlaces a dichos servicios.
        </p>

        <h3>5. Contenidos de terceros y enlaces</h3>
        <p>
          El Sitio puede incluir enlaces a recursos externos o contenidos de
          terceros. Dichos enlaces se facilitan únicamente para comodidad del
          Usuario; Nexia no controla ni garantiza la veracidad, utilidad o
          disponibilidad de los sitios enlazados y no asume responsabilidad
          alguna por su contenido.
        </p>

        <h3>6. Protección de datos y privacidad</h3>
        <p>
          El tratamiento de datos personales se rige por la Política de
          Privacidad del Sitio. Al utilizar el Sitio usted consiente las
          prácticas descritas en dicha política en relación con la recogida y uso
          de sus datos.
        </p>

        <h3>7. Cookies y seguimiento</h3>
        <p>
          Nuestro Sitio puede utilizar cookies y tecnologías similares para
          mejorar la experiencia del usuario, analizar el tráfico y personalizar
          contenidos. Consulte la Política de Cookies para más información y
          cómo desactivarlas.
        </p>

        <h3>8. Contenido aportado por usuarios</h3>
        <p>
          En caso de que el Sitio permita a usuarios subir contenido, el
          usuario garantiza que posee los derechos necesarios sobre dicho
          contenido y concede a Nexia una licencia no exclusiva, mundial y
          sublicenciable para usar, reproducir y mostrar ese contenido en el
          Sitio.
        </p>

        <h3>9. Exención de responsabilidad</h3>
        <p>
          El Sitio se proporciona "tal cual" y "según disponibilidad". Nexia
          no garantiza la ausencia de errores, la disponibilidad continua ni la
          idoneidad para un propósito concreto. En la máxima medida permitida por
          la ley, Nexia excluye cualquier responsabilidad por daños derivados del
          uso o imposibilidad de uso del Sitio.
        </p>

        <h3>10. Seguridad</h3>
        <p>
          Aunque implementamos medidas razonables para proteger el Sitio y los
          datos de los usuarios, ningún sistema es totalmente seguro. Los
          usuarios deben adoptar prácticas seguras (contraseñas robustas,
          mantener sus sistemas actualizados) y notificar cualquier actividad
          sospechosa.
        </p>

        <h3>11. Modificaciones del servicio y de los términos</h3>
        <p>
          Nexia se reserva el derecho a modificar, suspender o interrumpir el
          Sitio o cualquiera de sus características en cualquier momento. También
          podrá actualizar estos términos; las modificaciones serán efectivas
          desde su publicación en esta página. Se recomienda revisarlos con
          regularidad.
        </p>

        <h3>12. Terminación</h3>
        <p>
          Nexia podrá, cuando lo considere oportuno y sin previo aviso, denegar
          o retirar el acceso a este Sitio a aquellos usuarios que incumplan
          estos términos o cuyas conductas considere inapropiadas.
        </p>

        <h3>13. Legislación aplicable y jurisdicción</h3>
        <p>
          Estos términos se regirán e interpretarán conforme a las leyes
          aplicables en la jurisdicción donde Nexia tenga su sede. Para la
          resolución de cualquier conflicto derivado de estos términos, las
          partes se someten a los tribunales competentes que correspondan.
        </p>

        <h3>14. Contacto y soporte</h3>
        <p>
          Para cualquier consulta relativa a estos términos o al Sitio, puede
          ponerse en contacto directamente con el autor a través del correo
          electrónico <span 
            className={`email-copy ${emailCopied ? 'copied' : ''}`}
            onClick={handleEmailCopy}
            style={{cursor: 'pointer'}}
          >
            dxvvdev@gmail.com
          </span>
          o mediante Discord. Busque el usuario <strong>dxvv_7</strong> en
          Discord o utilice el canal de contacto que aparezca en el sitio. Intentaremos
          responder a las consultas en un plazo razonable.
        </p>

        <p>
          Última actualización: marzo de 2026.
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditions;
