/* Hooks */
import { useEffect, useLayoutEffect, useRef, useState } from "react"

/* Images */
import nexia from "../../../assets/Nexia/NexiaWhite.svg"

/* Generator */
import { generateFakeCode } from "./generators/fakeCode"



/* Render atm bios */
export function AtmBios({ onFinish }: { onFinish: () => void }) {
  const [enterScreen, setEnterScreen] = useState(false)
  const [output, setOutput] = useState("")
  const containerRef = useRef<HTMLDivElement>(null)

  // Render text
  const fullText = useRef(generateFakeCode())


  // Enter 
  useEffect(() => {
    const enter = setTimeout(() => {
      setEnterScreen(true)
    }, 500)

    return () => clearTimeout(enter)
  }, [])


  // Duration and render code
  useEffect(() => {
    const totalDuration = 7000
    const text = fullText.current
    const speed = totalDuration / text.length

    let i = 0

    const interval = setInterval(() => {
      if (i < text.length) {
        setOutput((prev) => prev + text[i])
        i++
      } else {
        clearInterval(interval)

        // Out animation
        setTimeout(() => {
          setEnterScreen(false)
        }, 3500);

        // Finish process
        setTimeout(() => {
          onFinish()
        }, 5000)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [onFinish])


  // Autoscroll
  useLayoutEffect(() => {
    const el = containerRef.current
    if (!el) return

    requestAnimationFrame(() => {
      el.scrollTop = el.scrollHeight
    })
  }, [output])



  return (
    <>
      <div className={`loading-atm-grid ${enterScreen ? "in" : "out"}`}>

        <div className="box-loading-atm" ref={containerRef}>
          <p>{output}</p>
          <span className="cursor" />
        </div>

        <div className="box-loading-atm">

          <div className="content-loading-atm">
            <img src={nexia} alt="Nexia logo" />
          </div>

          <div className="content-loading-atm">
            <p>¡Bienvenido a ATM Nexia!</p>
            <p>Estamos preparando el sistema para usted. Por favor espere un momento mientras se inicia</p>
            <p className="dots-text-loading">
              Esto puede tomar unos segundos
              <span className="dots">
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </span>
            </p>
          </div>

        </div>

      </div>
    </>
  )
}