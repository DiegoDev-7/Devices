/* Hooks */
import { useEffect, useState } from "react"

/* Images */
import clock from "../../../assets/Icons/clock_light.svg"
import stopwatch from "../../../assets/Icons/stopwatch_light.svg"
import timer from "../../../assets/Icons/timer_light.svg"
import triangleIcon from "../../../assets/Icons/triangleArrow_light.svg"
import pauseIcon from "../../../assets/Icons/pause_light.svg"
import Reload from "../../../assets/Icons/reaload_light.svg"



/* Render */
const ClockApp = () => {
  // Render options pages
  const [option, setOption] = useState("zonetime")



  return (
    <>
      <div className="container-app-clock">
        
        {/* Render options */}
        {option === "zonetime" && <ZoneTime />}
        {option === "optiontimer" && <OptionTimer />}
        {option === "optioncounter" && <OptionCounter />}


        {/* Option Buttons */}
        <div className="box-buttons-app-clock">
          <button onClick={() => setOption("zonetime")}>
            <img src={clock} alt="Reloj" />
          </button>

          <button onClick={() => setOption("optiontimer")}>
            <img src={stopwatch} alt="Temporizador" />
          </button>

          <button onClick={() => setOption("optioncounter")}>
            <img src={timer} alt="Contador" />
          </button>
        </div>

      </div>
    </>
  )
}



/* Clock */
const ZoneTime = () => {
  // Hour
  const [now, setNow] = useState(new Date())

  // Interval of the time
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Get hour, minutes and seconds
  const getTime = (timeZone: string): string => {
    const date = new Date()

    return new Intl.DateTimeFormat("es-CO", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(date)
  }



  return (
    <>
      {/* Hour */}
      <div className="box-timer-app-clock">
        <div className="contain-zonetime-clock">
          <p>Colombia</p>
          <p>Bogotá</p>
        </div>

        <span>{String(now.getHours()).padStart(2, "0")}:{String(now.getMinutes()).padStart(2, "0")}</span>
      </div>

      {/* ZoneTime */}
      <div className="box-timezone-app-clock">
        <div className="contain-text-app-clock">
          <p>Hora en Colombia</p>
          <span>{getTime("America/Bogota")}</span>
          <p>Bogotá</p>
        </div>

        <div className="contain-text-app-clock">
          <p>Hora en Estados Unidos</p>
          <span>{getTime("America/New_York")}</span>
          <p>New York</p>
        </div>

        <div className="contain-text-app-clock">
          <p>Hora en Canada</p>
          <span>{getTime("America/Toronto")}</span>
          <p>Toronto</p>
        </div>

        <div className="contain-text-app-clock">
          <p>Hora en China</p>
          <span>{getTime("Asia/Shanghai")}</span>
          <p>Pekín</p>
        </div>
      </div>
    </>
  )
}



/* Timer */
const OptionTimer = () => {
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  // Activate timer
  const [running, setRunning] = useState(false)
  const [remaining, setRemaining] = useState(0)


  // Interval updater for elapsed time
  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null

    if (running) {
      timer = setInterval(() => {
        setRemaining(prev => {
          if (prev <= 1) {
            setRunning(false)
            setHours(0)
            setMinutes(0)
            setSeconds(0)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }

    return () => {
      if (timer) clearInterval(timer)
    }
  }, [running])

  
  // Change timer for the hours, minutes and seconds
  const clamp = (val: number, min: number, max: number) => Math.max(min, Math.min(max, val))
  const change = (unit: 'h'|'m'|'s', delta: number) => {
    // Not allow direct changes while the timer is running
    if (running) return

    // if there is a paused remaining time, modify remaining
    if (remaining > 0) {
      const curH = Math.floor(remaining / 3600) % 24
      const curM = Math.floor((remaining % 3600) / 60)
      const curS = remaining % 60

      let nh = curH
      let nm = curM
      let ns = curS

      if (unit === 'h') nh = clamp((nh + delta + 24) % 24, 0, 23)
      if (unit === 'm') nm = clamp((nm + delta + 60) % 60, 0, 59)
      if (unit === 's') ns = clamp((ns + delta + 60) % 60, 0, 59)

      const newTotal = nh * 3600 + nm * 60 + ns
      setRemaining(newTotal)

      // keep the standalone h/m/s in sync for clarity when remaining goes to zero
      setHours(nh)
      setMinutes(nm)
      setSeconds(ns)
      return
    }

    // otherwise modify the initial h/m/s values before starting
    if (unit === 'h') setHours(h => clamp((h + delta + 24) % 24, 0, 23))
    if (unit === 'm') setMinutes(m => clamp((m + delta + 60) % 60, 0, 59))
    if (unit === 's') setSeconds(s => clamp((s + delta + 60) % 60, 0, 59))
  }

  // Start counter
  const startTimer = () => {
    const total = hours * 3600 + minutes * 60 + seconds
    if (total <= 0) return
    setRemaining(total)
    setRunning(true)
  }

  // Pauses and unpauses the counter and resets it
  const toggleRun = () => {
    if (running) {
      setRunning(false)
      return
    }
    if (remaining > 0) {
      setRunning(true)
      return
    }

    startTimer()
  }

  // pad to two digits
  const pad = (n: number) => String(n).padStart(2, '0')

  // derive displayed values from remaining when available (running or paused)
  const displayH = remaining > 0 ? Math.floor(remaining / 3600) % 24 : hours
  const displayM = remaining > 0 ? Math.floor((remaining % 3600) / 60) : minutes
  const displayS = remaining > 0 ? remaining % 60 : seconds



  return (
    <>
      <div className="box-timer-option">
        <div className="timer-panel">

          <div className="time-picker">
            <div className="time-column">
              <button className="time-arrow up" onClick={() => change('h', -1)} aria-label="decrement hour">▲</button>
              <div className="time-number">{pad(displayH)}</div>
              <button className="time-arrow down" onClick={() => change('h', 1)} aria-label="increment hour">▼</button>
              <div className="time-label">Horas</div>
            </div>

            <div className="time-column">
              <button className="time-arrow up" onClick={() => change('m', -1)} aria-label="decrement minute">▲</button>
              <div className="time-number">{pad(displayM)}</div>
              <button className="time-arrow down" onClick={() => change('m', 1)} aria-label="increment minute">▼</button>
              <div className="time-label">Minutos</div>
            </div>

            <div className="time-column">
              <button className="time-arrow up" onClick={() => change('s', -1)} aria-label="decrement second">▲</button>
              <div className="time-number">{pad(displayS)}</div>
              <button className="time-arrow down" onClick={() => change('s', 1)} aria-label="increment second">▼</button>
              <div className="time-label">Segundos</div>
            </div>
          </div>

          <div className="timer-controls">
            <button
              className="start-timer-btn"
              onClick={toggleRun}
              disabled={!running && remaining === 0 && hours === 0 && minutes === 0 && seconds === 0}
              aria-label={running ? 'Pausar' : (remaining > 0 || hours+minutes+seconds>0) ? 'Iniciar' : 'Iniciar'}
            >
              <img src={running ? pauseIcon : triangleIcon} alt={running ? 'Pausar' : 'Iniciar'} />
            </button>
          </div>

        </div>

      </div>
    </>
  )
}



/* Counter */
const OptionCounter = () => {
  // Is stopwatch running
  const [running, setRunning] = useState(false)
  // Elapsed time in milliseconds
  const [elapsed, setElapsed] = useState(0) // milliseconds


  // Interval updater for elapsed time
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null

    if (running) {
      const start = Date.now() - elapsed
      interval = setInterval(() => {
        setElapsed(Date.now() - start)
      }, 10)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [running])


  // Toggle running state
  const toggle = () => setRunning(r => !r)
  // Reset stopwatch and elapsed
  const reset = () => { setRunning(false); setElapsed(0) }


  // Minutes, seconds and milliseconds
  const minutes = Math.floor(elapsed / 60000)
  const seconds = Math.floor((elapsed % 60000) / 1000)
  const milliseconds = elapsed % 1000


  // pad to two digits
  const pad2 = (n: number) => String(n).padStart(2, '0')
  // pad to three digits
  const pad3 = (n: number) => String(n).padStart(3, '0')



  return (
    <>
      <div className="box-timer-option-counter">
        <div className="timer-panel">

          <div className="counter-display" style={{textAlign: 'center', padding: '12px'}}>
            <div style={{fontSize: '2.2rem', fontFamily: 'var(--font-main, sans-serif)', color: 'var(--color-b, #000)'}}>
              {pad2(minutes)}:{pad2(seconds)}.{pad3(milliseconds)}
            </div>
          </div>

          <div className="timer-controls">

            <button className="start-timer-btn" onClick={toggle} aria-label={running ? 'Pause' : 'Start'}>
              <img src={running ? pauseIcon : triangleIcon} alt={running ? 'Pause' : 'Start'} />
            </button>

            <button className="start-timer-btn" onClick={reset} aria-label={running ? 'Pause' : 'Start'}>
              <img src={Reload} alt="Recargar" />
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default ClockApp