/* Hooks */
import { useEffect, useState } from "react";

/* Icons */
import { User } from "lucide-react";

/* Components */
import { BackButton } from "./BackButton";
import { transferUser } from "../../../../services/external/transfers/transference";
import { getAtm } from "../../../../services/external/atm/atm.service";
import { LoadingIcon } from "../../../../components/loading.ldrs";
import { getContacts } from "../../../../services/external/contacts/contacts.service";



/* User transference option */
export const UserTransferScreen = ({ onBack }: any) => {
  const [amount, setAmount] = useState<number | null>(null)
  const [contact, setContact] = useState<any[]>([])
  const [phone, setPhone] = useState("")
  const [sendAmount, setSendAmount] = useState<number | null>(null)
  const [balance, setBalance] = useState<number | null>(null)

  // Success send data
  const [success, setSuccess] = useState(false)
  const [visible, setVisible] = useState(false)

  // Error message
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [error, setError] = useState(false)
  const [exitError, setExitError] = useState(false)
  

  // Get balance in atm
  const fetchAtm = async () => {
    try {

      const [res, contactsRes] = await Promise.all([
        getAtm(),
        getContacts()
      ])

      setBalance(res.data.atm.balance)
      setContact(contactsRes.data)

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
    fetchAtm()
    getContacts()
  }, [])

  
  // Send money to user
  const sendUser = async () => {
    try {

      const res = await transferUser(amount)

      setSendAmount(res.data.amount)
      setAmount(null)

      await fetchAtm()


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
    <div className="box-atm-screen transfer-user">

      {/* Back button */}
      <BackButton onBack={onBack} />


      <div className="header">
        <User size={22} />
        <h2>Transferencia bancaria</h2>
        {balance ? <span>$ {balance}</span> : <LoadingIcon color="white" />}
        {success ? <span className={visible ? "in" : "out"}>- {sendAmount}</span> : ""}
      </div>


      {/* Contacts select */}
      <div className="box-contacts-atm">
        
        <h4>Contactos</h4>

        <div className="contacts-list-atm">
          {contact.length === 0 ? (
            <p>No hay contactos disponibles</p>
          ) : (
            <>
              {contact.map((c) => (
                <div
                  key={c.contact_id}
                  className="contact-item"
                  onClick={() => setPhone(c.phone)}
                >
                  <span>{c.name_contact}</span>
                  <small>{c.phone}</small>
                </div>
              ))}
            </>
          )}
        </div>
      </div>


      {/* Form */}
      <div className="box-form-atm">

        <label>Teléfono</label>
        <input
          type="text"
          placeholder="Número de teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label>Monto</label>
        <input
          type="number"
          placeholder="0"
          value={amount ?? ""}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <button onClick={sendUser}>
          Enviar a usuario
        </button>

      </div>


      {/* Errors */}
      {error && (
        <div className={`error-update ${exitError ? "exit" : ""}`}>
          {errorMsg}
        </div>
      )}

    </div>
  )
}