/* Hardware */
import { ContentAtm } from "./hardware/ContentAtm"

/* Ui */
import { CardRender } from "./components/CardAtm"
import { EnterCardAtm } from "./ui/EnterCardAtm"
import { ScrewAtm } from "./ui/ScrewAtm"
import { useState } from "react"



/* Render */
const AtmSys = () => {
  const [enterCard, setEnterCard] = useState(false)
  const [cardNumber, setCardNumber] = useState("")



  return (
    <>
      <div className="container-nexia-atm">
        
          <div className="container-atm-border">

            {/* Screen */}
            <ContentAtm
              enterCard={enterCard}
              setEnterCard={setEnterCard}
              cardNumber={cardNumber}
              setCardNumber={setCardNumber}
            />


            {/* Screws */}
            <ScrewAtm />


            {/* Enter debit card */}
            <EnterCardAtm
              enterCard={enterCard}
            />

          </div>

          {/* Card */}
          <CardRender 
            enterCard={enterCard}
            setEnterCard={setEnterCard}
            setCardNumber={setCardNumber}
          />

      </div>
    </>
  )
}

export default AtmSys