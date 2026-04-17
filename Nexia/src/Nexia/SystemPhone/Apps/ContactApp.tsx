/* Hooks */
import { useEffect, useState } from "react"

/* Images */
import user from "../../../assets/Icons/user_light.svg"

/* Components */
import { LoadingIcon } from "../../components/loading.ldrs"

/* Services */
import { getContacts } from "../../services/external/contacts/contacts.service"



/* Render */
type Contact = {
  contact_id: number,
  name_contact: string
  phone: string
}
const ContactApp = () => {
  const [data, setData] = useState<Contact[]>([])

  // Success send data
  const [success, setSuccess] = useState(false)
  const [visible, setVisible] = useState(false)

  // Error 
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [error, setError] = useState(false)
  const [exitError, setExitError] = useState(false)



  const fetchUser = async () => {
    try {

      const res = await getContacts()

      setData(res.data)

      setSuccess(true)
      setVisible(false)

      // Enter animation success
      setTimeout(() => setVisible(true), 2000)
      
      // Delete animation success
      setTimeout(() => setSuccess(false), 2300)
      
    } catch (error: any) {

      const message = 
        error?.response?.data?.message || 
        error?.response?.data?.error || 
        error?.message || 
        "Error inesperado"

      setErrorMsg(message)
      setError(true)
      setExitError(false)

      setTimeout(() => setExitError(true), 2000)

      setTimeout(() => {
        setError(false)
        setErrorMsg(null)
      }, 2300)

    }
  }
  useEffect(() => {
    fetchUser()
  }, [])



  return (
    <>
      <div className="contacts-container">

        <h3 className="contacts-title">Contactos</h3>

        <div className="contacts-list">

          {data === null ? (
            <div className="loading-contact">
              <LoadingIcon color="black" />
            </div>
          ) : data.length === 0 ? (
            <p className="empty-contacts">
              No tienes contactos añadidos en tu teléfono
            </p>
          ) : (
            <>
              {data.map(c => (
                <div key={c.contact_id} className="contact-item">

                  <div className="contact-avatar">
                    <img src={user} alt="usuario" />
                  </div>

                  <div className="contact-info">
                    <h4>{c.name_contact}</h4>
                    <p>
                      {`${c.phone.slice(0, 3)} ${c.phone.slice(3, 6)} ${c.phone.slice(6, 10)}`}
                    </p>
                  </div>

                </div>
              ))}
            </>
          )}

        </div>

      </div>
    </>
  )
}

export default ContactApp