/* Hooks */
import { useEffect, useRef, useState } from "react"

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
  return (
    <>
      <div className="container-status-bar-Apps">
        <div className="box-status-wifi">
          <p>ola1</p>
          <p>ola1</p>
        </div>
        <div className="box-status-wifi">
          ola
        </div>
        
        <div className="box-status-bar-buttons">
          <button className="button-status-bar">
            <img className="image-status-bar" src="" alt="" />
          </button>
          <button className="button-status-bar">
            <img className="image-status-bar" src="" alt="" />
          </button>
          <button className="button-status-bar">
            <img className="image-status-bar" src="" alt="" />
          </button>
          <button className="button-status-bar">
            <img className="image-status-bar" src="" alt="" />
          </button>
        </div>
        <div className="box-status-bar-buttons">
          <button className="button-status-bar">
            <img className="image-status-bar" src="" alt="" />
          </button>
          <button className="button-status-bar">
            <img className="image-status-bar" src="" alt="" />
          </button>
          <button className="button-status-bar">
            <img className="image-status-bar" src="" alt="" />
          </button>
          <button className="button-status-bar">
            <img className="image-status-bar" src="" alt="" />
          </button>
        </div>
        <div className="box-status-bar-buttons">
          <button className="button-status-bar">
            <img className="image-status-bar" src="" alt="" />
          </button>
          <button className="button-status-bar">
            <img className="image-status-bar" src="" alt="" />
          </button>
          <button className="button-status-bar">
            <img className="image-status-bar" src="" alt="" />
          </button>
          <button className="button-status-bar">
            <img className="image-status-bar" src="" alt="" />
          </button>
        </div>
        <div className="box-status-bar-buttons">
          <button className="button-status-bar">
            <img className="image-status-bar" src="" alt="" />
          </button>
          <button className="button-status-bar">
            <img className="image-status-bar" src="" alt="" />
          </button>
          <button className="button-status-bar">
            <img className="image-status-bar" src="" alt="" />
          </button>
          <button className="button-status-bar">
            <img className="image-status-bar" src="" alt="" />
          </button>
        </div>
      </div>

      <div className="divider-guide-status-bar">
        <img className="image-guie-status-bar-a" src={forward} alt="forward" />
        <img className="image-guie-status-bar-b" src={forward} alt="forward" />
      </div>

    </>
  )
}

export default statusBar