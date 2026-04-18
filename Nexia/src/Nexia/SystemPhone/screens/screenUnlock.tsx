/* Hooks */
import { useEffect, useState, useRef } from "react"

/* Images */
import arrow from "../../../assets/Icons/forward_light.svg"

/* Screens */
import Aplications from "./screenApps"



/* Screen unlock */
const ScreenUnlock = () => {
  const [hour, setHour] = useState<Date>(new Date())
  
  
  // Update time
  useEffect(() => {
    const interval = setInterval(() => {
      setHour(new Date())
    }, 1000)

    return () => clearInterval(interval)
  })


  /* Unlock screen settings including bar height and pointers */
  const CONTAINER_HEIGHT = 200
  const BAR_HEIGHT = 100
  const MAX_DRAG = CONTAINER_HEIGHT - BAR_HEIGHT

  const [dragging, setDragging] = useState(false)
  const [offsetY, setOffsetY] = useState(0)
  const startY = useRef(0)
  const [unlocked, setUnlocked] = useState(false)

  /* Activate pointers: down, up and move */
  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true)
    startY.current = e.clientY
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return

    const diff = startY.current - e.clientY // To up

    if (diff < 0) return // Do not allow lowering further

    setOffsetY(Math.min(diff, MAX_DRAG))
  }
  const onPointerUp = () => {
    setDragging(false)

    if (offsetY >= MAX_DRAG) {
    setUnlocked(true)
  }

    setOffsetY(0)
  }



  return (
    <>
      {!unlocked ? 
        <div className="container-cellPhone-lock">

          <p className="text-hour-cellPhone-wallpapper">{String(hour.getHours()).padStart(2, "0")}:{String(hour.getMinutes()).padStart(2, "0")}</p>
          
          <p className="text-date-cellPhone-wallpapper">
            {String(hour.getDate()).padStart(2, "0")}/
            {String(hour.getMonth() + 1).padStart(2, "0")}/
            {String(hour.getFullYear())}
          </p>
          
          <div className="container-screen-sliding-unlock" style={{ width: 505, height: 200 }}>
            <div
              className="box-screen-unlock"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              style={{
                height: 100,
                transform: `translateY(${-offsetY}px)`,
                transition: dragging ? "none" : "transform .25s ease",
              }}
            >
              <img className="image-screen-sliding-arrow-A" src={arrow} alt="Arrow forward" />
              <img className="image-screen-sliding-arrow-B" src={arrow} alt="Arrow forward" />

              <p className="text-screen-sliding-arrow">Deslice hacia arriba para desbloquear</p>
            </div>
          </div>
          
        </div>
        : (
          <Aplications />
        )
      }
    </>
  )
}

export default ScreenUnlock