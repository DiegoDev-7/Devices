/* Images */
import gold from "../../../assets/Icons/cash_gold.svg"



/* Render */
type Props = {
  onBack: () => void
}
const CashApp = ({ onBack }: Props) => {
  return (
    <>
      <div className="Container-app-screen-cash">

        <div className="box-app-screen-cash-a">
          <h2>Dinero total</h2>
          <span>$ 464221</span>
        </div>
        
        <div className="box-app-screen-cash-b">
          <button className="button-app-cash">
            <img className="image-app-cash" src={gold} alt="Dinero" />
          </button>
        </div>

      </div>
    </>
  )
}

export default CashApp