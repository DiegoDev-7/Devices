/* Hooks */
import { useState } from "react"

/* Images */
import sim from "../../../assets/Apps/simcard.svg"
import forward from "../../../assets/Icons/forward_dark.svg"



/* Render */
const SimApp = () => {
  type Description = {
    id: number
    title: string
    content: string | number
  }
  const description: Description[] = [
    { id: 1, title: "Número telefonico", content: 415653212 },
    { id: 2, title: "Nombre y apellido", content: "Rubius" },
    { id: 3, title: "Provedor de la sim", content: "Clara" },
    { id: 4, title: "Versión", content: "1.0V" },
  ]

  
  // Open screen and Copy text
  const [openId, setOpenId] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)

  // Handle screen view
  const handleToggle = (id: number) => {
    setOpenId(prev => (prev === id ? null : id))
  }

  // Copy phone number
  const handleCopy = (value: string | number) => {
    navigator.clipboard.writeText(String(value))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }



  return (
    <>
      <div className="Container-app-screen-simcard">
        <div className="contain-app-screen-simcard">

          <div className="box-app-screen-simcard-a">
            <img src={sim} alt="Sim card" />
          </div>

          <div className="box-app-screen-simcard-b">
            {description.map(v => {
              const isOpen = openId === v.id

              return (
                <div key={v.id} className="content-simcard">

                  <button 
                    className="box-button-text-simcard" 
                    onClick={() => handleToggle(v.id)}
                  >
                    <p>{v.title}</p>
                    <img 
                      className={`image-button-simcard ${isOpen ? "active" : ""}`} 
                      src={forward} 
                      alt="Flecha" 
                    />
                  </button>

                  {isOpen && (
                    <div className="box-text-simcard in">
                      <span
                        className={`
                          ${v.id === 1 ? "email-copy" : ""}
                          ${copied && v.id === 1 ? "copied" : ""}
                        `}
                        onClick={v.id === 1 ? () => handleCopy(v.content) : undefined}
                        style={{ cursor: v.id === 1 ? "pointer" : "text" }}
                      >
                        {v.content}
                      </span>
                    </div>
                  )}

                </div>
              )
            })}
          </div>

        </div>
      </div>
    </>
  )
}

export default SimApp