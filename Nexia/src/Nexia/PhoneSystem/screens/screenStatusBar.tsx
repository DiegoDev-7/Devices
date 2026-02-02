/* Hooks */
import { type JSX, useEffect, useRef, useState } from "react"

/* Images */
import batteryLowLight from "../../../assets/Icons/batterylow_light.svg"
import batteryFullLight from "../../../assets/Icons/batteryfull_light.svg"
import batteryLowDark from "../../../assets/Icons/batterylow_dark.svg"
import batteryFullDark from "../../../assets/Icons/batteryfull_dark.svg"
import wifiLight from "../../../assets/Icons/Wifi_light.svg"
import wifiDark from "../../../assets/Icons/Wifi_dark.svg"
import networklight from "../../../assets/Icons/Network_light.svg"
import networkDark from "../../../assets/Icons/Network_dark.svg"
import forward from "../../../assets/Icons/forward_dark.svg"

import moon from "../../../assets/Icons/moon_dark.svg"
import plane from "../../../assets/Icons/plane_dark.svg"
import wifi from "../../../assets/Icons/Wifi_dark.svg"
import flashlight from "../../../assets/Icons/flashlight_dark.svg"
import bluetooth from "../../../assets/Icons/bluetooth_dark.svg"
import lock from "../../../assets/Icons/lock_dark.svg"
import eye from "../../../assets/Icons/eye.svg"
import batterySaving from "../../../assets/Icons/batterySaving.svg"
import mobileData from "../../../assets/Icons/mobileData_light.svg"



/* Render status bar */
const statusBar = () => {
  return (
    <>
      <StatusBarIcons />

      <StatusBarSliding />
    </>
  )
}


/* Status bar text left and right icons */
const StatusBarIcons = () => {
  /* Update hour */
  const [value, setValue] = useState<number>(0)
  const hour: Date = new Date()

  /* Download status */
  useEffect(() => {
    const id = setInterval(() => {
      const randomNumber: number = Math.floor(Math.random() * 400 + 100)
      setValue(randomNumber)
    }, 1000)

    return () => clearInterval(id)
  }, [])


  type StatusBar = {
    id: string
    containerImage: string
    classImage: string
    src: string
    alt: string
  }
  const StatusBarCss: StatusBar[] = [
    { id: "network", containerImage: "container-image-network", classImage: "image-network", src: networklight, alt: "Red" },
    { id: "wifi", containerImage: "container-image-network", classImage: "image-wifi", src: wifiLight, alt: "Wifi" },
    { id: "battery", containerImage: "container-image-network", classImage: "image-battery", src: batteryFullLight, alt: "Bateria" },
  ]


  
  return (
    <>  
      <div className="container-status-bar">
        <div className="box-stats-barA">
          <span className="text-hour-status-bar">
            {String(hour.getHours()).padStart(2, "0")}:{String(hour.getMinutes()).padStart(2, "0")}
          </span>
          <div className="divider-status-bar" />
          <span className="text-download-network">
            {value}Kb/s
          </span>
        </div>
        <div className="box-stats-barB">
          {[StatusBarCss[0], ...StatusBarCss].map(v => (
            <div key={`${v.id}-${Math.random()}`} {...v} className={v.containerImage}>
              <img className={v.classImage} src={v.src} alt={v.alt} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}


/* Sliding status bar */
const StatusBarSliding = () => {
  /* Limits */
  const MIN_HEIGHT = 100
  const MAX_HEIGHT = 538
  const SNAP_LIMIT = 50

  /* Variables to activate sliding */
  const [height, setHeight] = useState(MIN_HEIGHT)
  const [dragging, setDragging] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const startY = useRef(0)
  const startHeight = useRef(0)

  /* Increment opacity */
  const opacity: number = Math.max(0, Math.min((height - MIN_HEIGHT) / (MAX_HEIGHT - MIN_HEIGHT), 1))


  /* Position on the screen and activate the child */
  const onDown = (e: React.PointerEvent) => {
    setDragging(true)
    startY.current = e.clientY
    startHeight.current = height
  }
  const onMove = (e: React.PointerEvent) => {
    if (!dragging) return

    const diff = e.clientY - startY.current
    let nextHeight = startHeight.current + diff

    // Limit on screen
    nextHeight = Math.max(MIN_HEIGHT, Math.min(nextHeight, MAX_HEIGHT))

    setHeight(nextHeight)
  }
  const onUp = () => {
    setDragging(false)

    const diff = height - startHeight.current

    // Open
    if (!isOpen && diff > SNAP_LIMIT) {
      setHeight(MAX_HEIGHT)
      setIsOpen(true)
      return
    }

    // Close
    if (isOpen && diff < -SNAP_LIMIT) {
      setHeight(MIN_HEIGHT)
      setIsOpen(false)
      return
    }

    // Return to state before
    setHeight(isOpen ? MAX_HEIGHT : MIN_HEIGHT)
  }



  return (
    <>
      <div className="container-sliding-status-bar" >
        <div
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          className="box-status-settings"
          style={{
            height,
            opacity,
            transition: dragging ? "none" : "height .3s ease",
          }}
        >
          {isOpen ? <StatusBarApps /> : ""}
        </div>
      </div>
    </>
  )
}

const StatusBarApps = () => {
  /* Active and desactive class */
  const [activeId, setActiveId] = useState<number[]>([])
  const [activeWifi, setActiveWifi] = useState<boolean>(true)
  const [activeData, setActiveData] = useState<boolean>(false)

  /* Container from buttons */
  type ButtonsOptions = {
    id: number
    src: string
    alt: string
  } 
  const ButtonsOptions = [
    { id: 1, src: bluetooth, alt: "icon Bluetooth" },
    { id: 2, src: wifi, alt: "icon Wifi" },
    { id: 3, src: moon, alt: "icon Luna" },
    { id: 4, src: flashlight, alt: "icon Linterna" },
    { id: 5, src: plane, alt: "icon Avión" },
    { id: 6, src: eye, alt: "icon ojo" },
    { id: 7, src: batterySaving, alt: "icon ahorro de bateria" },
    { id: 8, src: lock, alt: "icon candado" },
  ]



  return (
    <>
      <div className="container-status-bar-Apps">
        <button className={`box-status-wifi ${activeWifi ? "on" : ""}`} onClick={() => setActiveWifi(prev => !prev)}>
          <div className="box-image-status-wifi">
            <img className="image-status-wifi" src={wifiLight} alt="Icon wifi" />
          </div>
          <p>Wifi</p>
          <p className="description">{activeWifi ? "Conectado" : "Desactivado"}</p>
        </button>
        
        <button className={`box-status-wifi ${activeData ? "on" : ""}`} onClick={() => setActiveData(prev => !prev)}>
          <div className="box-image-status-wifi">
            <img className="image-status-wifi" src={mobileData} alt="Icon datos mobiles" />
          </div>
          <p>Clara</p>
          <p className="description">{activeData ? "Conectado" : "Desactivado"}</p>
        </button>
        
        {ButtonsOptions.reduce((acc: JSX.Element[], _, i) => {
          if (i % 4 !== 0) return acc

          acc.push(
            <div key={i} className="box-status-bar-buttons">
              {ButtonsOptions.slice(i, i + 4).map(v => (
                <button key={v.id} className={`button-status-bar ${activeId.includes(v.id) ? "on" : ""}`} onClick={() =>
                  setActiveId(prev =>
                    prev.includes(v.id)
                      ? prev.filter(id => id !== v.id) // Desactive
                      : [...prev, v.id]                // Active
                  )
                }>
                  <img className="image-status-bar" src={v.src} alt={v.alt} />
                </button>
              ))}
            </div>
          )

          return acc
        }, [])}
      </div>

      <div className="divider-guide-status-bar">
        <img className="image-guie-status-bar-a" src={forward} alt="forward" />
        <img className="image-guie-status-bar-b" src={forward} alt="forward" />
      </div>
    </>
  )
}

export default statusBar