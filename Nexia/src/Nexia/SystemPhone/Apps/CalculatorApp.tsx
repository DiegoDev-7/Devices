/* Hooks */
import { useState } from "react"

/* Images */
import nexia from "../../../assets/Nexia/Nexia.svg"



/* Render */
const CalculatorApp = () => {
  const [input, setInput] = useState<string>("")
  const [result, setResult] = useState<string[]>([])
  const operators = ["+", "-", "x", "/", "%", "."]


  // Sum all numbers in the input with exceptions
  const handleClick = (value: string): void => {
    setInput(prev => {
      const lastChar = prev.slice(-1)

      const isOperator = operators.includes(value)
      const lastIsOperator = operators.includes(lastChar)

      if (prev === "" && isOperator) return prev
      if (lastIsOperator && isOperator) {
        return prev.slice(0, -1) + value
      }

      return prev + value
    })
  }

  // Clear input
  const handleClear = (): void => {
    setInput("")
  }
  const handleClearResults = (): void => {
    setResult([])
  }

  // Delete the last number in the input
  const handleDelete = (): void => {
    setInput(prev => prev.slice(0, -1))
  }
  
  // Calculate the result 
  const handleEqual = (): void => {
    const sanitized = input.replace(/x/g, "*")
    const evalResult = eval(sanitized)
    const resultString = String(evalResult)

    setInput("")
    setResult(prev => [...prev, `${input.split("").join(" ")} = ${resultString}`])
  }



  return (
    <>
      <div className="Container-app-calculator">

        {/* Results container */}
        <div className="box-app-screen-calculator-a">
          <div className="contain-note-counter-screen-calculator">
            <div className="box-note-calculator">
              {result.map((res, i) => (
                <>
                  <p key={i}>{res}</p>
                </>
              ))}
            </div>
          </div>

          <div className="contain-text-screen-calculator">
            <input className="box-text-screen-calculator" type="text" value={input} />
          </div>
        </div>


        {/* Buttons */}
        <div className="box-app-screen-calculator-b">
          <button className="button-screen-calculartor" onClick={handleClear} onDoubleClick={handleClearResults}>AC</button>
          <button className="button-screen-calculartor" onClick={handleDelete}>C</button>
          <button className="button-screen-calculartor" onClick={() => handleClick("%")}>%</button>
          <button className="button-screen-calculartor" onClick={() => handleClick("/")}>/</button>

          <button className="button-screen-calculartor" onClick={() => handleClick("7")}>7</button>
          <button className="button-screen-calculartor" onClick={() => handleClick("8")}>8</button>
          <button className="button-screen-calculartor" onClick={() => handleClick("9")}>9</button>

          <button className="button-screen-calculartor" onClick={() => handleClick("x")}>x</button>

          <button className="button-screen-calculartor" onClick={() => handleClick("4")}>4</button>
          <button className="button-screen-calculartor" onClick={() => handleClick("5")}>5</button>
          <button className="button-screen-calculartor" onClick={() => handleClick("6")}>6</button>

          <button className="button-screen-calculartor" onClick={() => handleClick("-")}>-</button>

          <button className="button-screen-calculartor" onClick={() => handleClick("1")}>1</button>
          <button className="button-screen-calculartor" onClick={() => handleClick("2")}>2</button>
          <button className="button-screen-calculartor" onClick={() => handleClick("3")}>3</button>
          
          <button className="button-screen-calculartor" onClick={() => handleClick("+")}>+</button>

          <img className="image-nexia-calculator" src={nexia} alt="nexia" />

          <button className="button-screen-calculartor" onClick={() => handleClick("0")}>0</button>
          <button className="button-screen-calculartor" onClick={() => handleClick(".")}>.</button>
          <button className="button-screen-calculartor" onClick={handleEqual}>=</button>
        </div>

      </div>
    </>
  )
}

export default CalculatorApp