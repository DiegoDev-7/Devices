/* Hooks */
import { useEffect, useState } from "react"

/* Images */
import user from "../../../assets/Icons/user_light.svg"

/* Icons */
import { Trash } from "lucide-react"

/* Components */
import { LoadingIcon } from "../../components/loading.ldrs"

/* Services */
import { deleteContact, getContacts, updateContact } from "../../services/external/contacts/contacts.service"



/* Render */
type Contact = {
  contact_id: number,
  name_contact: string
  phone: string
}
const ContactApp = () => {
  const [data, setData] = useState<Contact[]>([])
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editValue, setEditValue] = useState("")
  const [trash, setTrash] = useState(false)

  // Success send data
  const [success, setSuccess] = useState(false)
  const [visible, setVisible] = useState(false)

  // Error 
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [error, setError] = useState(false)
  const [exitError, setExitError] = useState(false)


  // Get contact
  const fetchUser = async () => {
    try {

      const res = await getContacts()

      setData(res.data)

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


  // Save contact
  const saveContact = async (contact_id: number, newName: string) => {
    try {

      if (!newName) return null

      await updateContact(contact_id, newName.trim())

      // Actualización optimista
      setData(prev =>
        prev.map(contact =>
          contact.contact_id === contact_id
            ? { ...contact, name_contact: newName.trim() }
            : contact
        )
      )

      setEditingId(null)
      setEditValue("")


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


  // Delete contact
  const deleteCon = async (contact_id: number) => {
    try {

      await deleteContact(contact_id)

      await fetchUser()


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



  return (
    <>
      <div className="contacts-container">
        
        <h3 className="contacts-title">Contactos</h3>

        {/* Contacts */}
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
              {data.map((c) => (
                <button
                  key={c.contact_id}
                  type="button"
                  className="contact-item"
                  onMouseEnter={() => setTrash(true)}
                  onMouseLeave={() => setTrash(false)}
                >
                  <div className="contact-avatar">
                    <img src={user} alt="usuario" />
                  </div>

                  <div className="contact-info">
                    {editingId === c.contact_id ? (
                      <input
                        type="text"
                        value={editValue}
                        autoFocus
                        onChange={(e) => setEditValue(e.target.value)}
                        onBlur={() => saveContact(c.contact_id, editValue)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            saveContact(c.contact_id, editValue)
                          }
                          if (e.key === "Escape") {
                            setEditingId(null)
                            setEditValue("")
                          }
                        }}
                      />
                    ) : (
                      <h4
                        onClick={() => {
                          setEditingId(c.contact_id)
                          setEditValue(c.name_contact)
                        }}
                      >
                        {c.name_contact}
                      </h4>
                    )}

                    <p>
                      {`${c.phone.slice(0, 3)} ${c.phone.slice(3, 6)} ${c.phone.slice(6, 10)}`}
                    </p>
                  </div>

                  {trash && (
                    <button
                      className="box-delete-contact"
                      onClick={() => deleteCon(c.contact_id)}
                    >
                      <Trash color="darkred" />
                    </button>
                  )}
                </button>
              ))}
            </>
          )}
        </div>

      </div>


      {/* Success */}
      {success && (
        <span className={`success-contact ${visible ? "exit" : ""}`}>
          ✔
        </span>
      )}

      {/* Error */}
      {error && (
        <div className={`error-contact ${exitError ? "exit" : ""}`}>
          {errorMsg}
        </div>
      )}
    </>
  )
}

export default ContactApp