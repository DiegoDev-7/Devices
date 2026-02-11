
/* Images */
import nexia from "../../../assets/Nexia/Nexia.svg"



/* Render */
const CalculatorApp = () => {
  return (
    <>
      <div className="Container-app-calculator">

        <div className="box-app-screen-calculator-a">

          <div className="contain-note-counter-screen-calculator">
            <div className="box-note-calculator">
              <p>6+1</p>
              <p>6+1</p>
              <p>6+1</p>
              <p>6+1</p>
              <p>6+1</p>
              <p>6+1</p>
            </div>
          </div>

          <div className="contain-text-screen-calculator">
            <p className="box-text-screen-calculator">0</p>
          </div>

        </div>
        <div className="box-app-screen-calculator-b">

          <button className="button-screen-calculartor">AC</button>
          <button className="button-screen-calculartor">C</button>
          <button className="button-screen-calculartor">%</button>
          <button className="button-screen-calculartor">/</button>

          <button className="button-screen-calculartor">7</button>
          <button className="button-screen-calculartor">8</button>
          <button className="button-screen-calculartor">9</button>

          <button className="button-screen-calculartor">x</button>

          <button className="button-screen-calculartor">4</button>
          <button className="button-screen-calculartor">5</button>
          <button className="button-screen-calculartor">6</button>

          <button className="button-screen-calculartor">-</button>

          <button className="button-screen-calculartor">1</button>
          <button className="button-screen-calculartor">2</button>
          <button className="button-screen-calculartor">3</button>
          
          <button className="button-screen-calculartor">+</button>

          <img className="image-nexia-calculator" src={nexia} alt="nexia" />

          <button className="button-screen-calculartor">0</button>
          <button className="button-screen-calculartor">.</button>
          <button className="button-screen-calculartor">=</button>

        </div>

      </div>
    </>
  )
}

export default CalculatorApp