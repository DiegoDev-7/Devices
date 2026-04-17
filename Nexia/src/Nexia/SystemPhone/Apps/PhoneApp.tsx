/* Hooks */
import { useState } from "react"

/* Images */
import phone from "../../../assets/Apps/phone.svg"
import user from "../../../assets/Icons/user_light.svg"
import { createContact } from "../../services/external/contacts/contacts.service"



/* Render */
const PhoneApp = () => {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [nameContact, setNameContact] = useState("")

  const keys = ["1","2","3","4","5","6","7","8","9","*","0","#"]

  // Success send data
  const [success, setSuccess] = useState(false)
  const [visible, setVisible] = useState(false)

  // Error 
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [error, setError] = useState(false)
  const [exitError, setExitError] = useState(false)


  // Create new contact
  const newContact = async () => {
    try {

      if (!nameContact || !phoneNumber) return
      if (!nameContact.trim()) return
      
      await createContact(phoneNumber, nameContact)
      
      setPhoneNumber("")
      setNameContact("")


      setSuccess(true)
      setVisible(false)

      // Enter animation success
      setTimeout(() => setVisible(true), 2000)
      
      // Delete animation success
      setTimeout(() => setSuccess(false), 2300)
      
    } catch (error: any) {

      setPhoneNumber("")
      setNameContact("")

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


  // Delete number
  const handleDelete = () => {
    setPhoneNumber((prev) => prev.slice(0, -1))
  }

  // Add number in input
  const handleKeyPress = (key: string) => {
    setPhoneNumber((prev) => {
      if (prev.length >= 10) return prev
      return prev + key
    })
  }

  // Paste values
  const handlePaste = (e: React.ClipboardEvent) => {
    const paste = e.clipboardData.getData("text").slice(0, 10)

    if (!/^\d+$/.test(paste)) return

    setPhoneNumber(paste)
  }



  return (
    <>
      <div className="Container-app-screen-phone">

        {/* Successful message */}
        {success && (
          <span className={`success-phone ${visible ? "exit" : ""}`}>
            ✔
          </span>
        )}

        {error && (
          <div className={`error-phone ${exitError ? "exit" : ""}`}>
            {errorMsg}
          </div>
        )}
        

        {/* Contact */}
        <div className="contain-app-phone-a">
          {phoneNumber.length >= 1 ? (
            <div className={`box-app-phone-contact ${visible ? "in" : "out"}`}>

              <div className="app-phone-image">
                <img src={user} alt="Image user" />
              </div>

              <div className="app-phone-contact">
                <input 
                  type="text" 
                  placeholder="Nombre" 
                  value={nameContact}
                  onChange={(e) => setNameContact(e.target.value)}
                />
                <span>{phoneNumber}</span>
              </div>

            </div>
          ) : ""}
        </div>

        
        {/* Numbers */}
        <div className="contain-app-phone-b">
          <div className="box-app-text-phone">

            <input
              type="text"
              value={phoneNumber}
              placeholder="__________"
              onPaste={handlePaste}
              readOnly
            />
            
            <div className="box-delete-phone" onClick={handleDelete}>
              x
            </div>

          </div>

          <div className="box-app-buttons-phone">

            {keys.map((key) => (
              <div key={key} className="contain-app-button-phone">
                <button
                  className="button-app-phone"
                  onClick={() => handleKeyPress(key)}
                >
                  {key}
                </button>
              </div>
            ))}
            
          </div>


          {/* Button */}
          <div className="contain-app-button-phone">
            <button className="button-app-phone-call" onClick={newContact}>
              <img src={phone} alt="phone" />
            </button>
          </div>

        </div>
        
      </div>
    </>
  )
}

export default PhoneApp