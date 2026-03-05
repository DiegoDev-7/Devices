import { useState } from "react"

/* Top and bottom edge of cell phone */
const CellPhoneEdge = () => {
  // 
  const [viewT, setViewT] = useState(false)
  const [screenT, setScreenT] = useState(false)
  //
  const [viewB, setViewB] = useState(false)
  const [screenB, setScreenB] = useState(false)

  // 
  const toggleButtonTop = () => {
    if (!viewT) {
      setScreenT(true)
    }
    setViewT(prev => !prev)
  }

  // 
  const toggleButtonBottom = () => {
    if (!viewB) {
      setScreenB(true)
    }
    setViewB(prev => !prev)
  }




  return (
    <>
      <button className="container-cellPhone-border-top" onClick={toggleButtonTop}>
        {screenT && (
          <div 
            className={`box-cellPhone-a ${viewT ? "enter" : "exit"}`} 
            onAnimationEnd={() => {
              if (!viewT) setScreenT(false)
            }}
          >
            <div className="box-border-top">

              <div className="connect-audio-border-top">
                <div className="connect-audio-inside-border-top" />
              </div>

              <div className="audio-border-top">
                <div className="audio-inside-border" />
                <div className="audio-inside-border" />
                <div className="audio-inside-border" />
                <div className="audio-inside-border" />
                <div className="audio-inside-border" />
                <div className="audio-inside-border" />
                <div className="audio-inside-border" />
                <div className="audio-inside-border" />
              </div>

            </div>
          </div>
        )}
      </button>

      <button className="container-cellPhone-border-bottom" onClick={toggleButtonBottom}>
        {screenB && (
          <div 
            className={`box-cellPhone-b ${viewB ? "enter" : "exit"}`}
            onAnimationEnd={() => {
              if (!viewB) setScreenB(false)
            }}
          >
            <div className="box-border-bottom">

              <div className="connect-charger-border-bottom">
                <div className="charger-inside-border-bottom" />
              </div>

              <div className="audio-border-bottom">
                <div className="audio-inside-border" />
                <div className="audio-inside-border" />
                <div className="audio-inside-border" />
                <div className="audio-inside-border" />
                <div className="audio-inside-border" />
                <div className="audio-inside-border" />
              </div>

              <div className="decoration-border-bottom" />

            </div>
          </div>
        )}
      </button>
    </>
  )
}

export default CellPhoneEdge