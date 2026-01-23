/* Hooks */
import { useState, useEffect } from "react"

/* Images */
import paused from "../../../assets/Icons/pause_dark.svg"
import triangleArrow from "../../../assets/Icons/triangleArrow_dark.svg"
import doubleTriangle from "../../../assets/Icons/double_triangleArrow_dark.svg"
import colombia from "../../../assets/Icons/Colombia.jpg"
import eeuu from "../../../assets/Icons/United_States.jpg"
import japan from "../../../assets/Icons/Japan.jpg"

/* Api Radio */
/* import { radioColombia } from "../../services/external/radio/radio.colombia"
import { radioEEUU } from "../../services/external/radio/radio.eeuu"
import { radioJapanese } from "../../services/external/radio/radio.japanese" */

/* ui */
import Vinyl from "../ui/Vinyl"
import LoadingRadio from "../ui/Cassette"

/* core */
import { useAudio } from "../core/AudioContext"



/* Render */
const RadioApp = () => {
  /* Render Images */
  type Country = {
    id: string
    img: string
    alt: string
    view: any
  }
  const countries: Country[] = [
    { id: "co", img: colombia, alt: "Colombia", view: <ColombiaRadio /> },
    { id: "us", img: eeuu, alt: "USA", view: <UnitedStatesRadio /> },
    { id: "ja", img: japan, alt: "Japan", view: <JapanRadio /> },
  ]

  /* Loading */
  const [loadingRadio, setLoadingRadio] = useState<boolean>(true)

  /* Views */
  const [currentView, setCurrentView] = useState("co")

  /* Select and open views from the countries */
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(countries[0])

  /* Filter countries */
  const availableCountries = countries.filter(
    country => country.id !== selected.id
  )
  

  /* Timer for the radio loading app */
  useEffect(() => {
    const id = setTimeout(() => {
      setLoadingRadio(prev => !prev)
    }, 2500)

    return () => clearTimeout(id)
  }, [])



  return (
    <>
      {loadingRadio ? <LoadingRadio /> : (
        <>
          <div className="country-select-screen-radio">

            <button className="button-select-app-radio" onClick={() => setOpen(prev => !prev)} aria-label="Select country">
              <img src={selected.img} alt={selected.alt} />
            </button>
            
            {open && (
              <ul className="list-country-app-radio">
                {availableCountries.map(c => (
                  <li 
                    key={c.id} 
                    onClick={() => {
                      setSelected(c)
                      setCurrentView(c.id)
                      setOpen(false)
                    }} 
                    tabIndex={0} 
                    role="button"
                  >
                    <img src={c.img} alt={c.alt} />
                  </li>
                ))}
              </ul>
            )}
            
          </div>

          <p className="text-fm-app-radio">FM</p>

          {currentView === "co" && <ColombiaRadio />}
          {currentView === "us" && <UnitedStatesRadio />}
          {currentView === "ja" && <JapanRadio />}

        </>
      )}
    </>
  )
}


/* Radio from Colombia */
const ColombiaRadio = () => {
  const { audioRef, volume, setVolumeDirect, playPause } = useAudio()
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    setVolumeDirect(volume)

    const audio = audioRef.current
    if (!audio) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    audio.addEventListener("play", handlePlay)
    audio.addEventListener("pause", handlePause)

    return () => {
      audio.removeEventListener("play", handlePlay)
      audio.removeEventListener("pause", handlePause)
    }
  }, [audioRef])



  
  return (
    <>
      <div className="Contain-app-screen-radio co">
        
        <audio
          ref={audioRef}
          src="http://4stream.pl:18272/stream"
          preload="none"
        />
        
        <Vinyl />

        {/* Content text */}
        <div className="box-content-app-screen-radio">

          <div className="radio-glow" />

          <div className="contain-title-app-radio">
            <h3>Contenido Emisora 9.99FM MP3</h3>
          </div>

          <div className="contain-image-station-app-radio">
            <img src="" alt="Emisora" />
          </div>

          <div className="contain-text-app-radio">
            <p>etiquetas das dsad sadas dsadasdsadas dsa dsad</p>
          </div>

          <div className="contain-context-title-app-radio">
            <p>Reproducción</p>
          </div>

          <div className="contain-context-app-radio">
            <p>MP3</p>
            <p>Co</p>
            <p>Spanish</p>
            <p>es</p>
          </div>

        </div>

        {/* Controls */}
        <div className="box-controls-app-screen-radio">
          <button className="button-controls-back-radio">
            <img className="image-controls-radio" src={doubleTriangle} alt="Atrás" />
          </button>

          <button className="button-controls-pause-radio" onClick={playPause}>
            <img className="image-controls-radio" src={isPlaying ? paused : triangleArrow} alt="Pause" aria-label={isPlaying ? "Pause" : "Play"} />
          </button>

          <button className="button-controls-forward-radio">
            <img className="image-controls-radio" src={doubleTriangle} alt="Adelante" />
          </button>
        </div>

        {/* Sound decoration */}
        <ul className="sound-controls-app-screen-radio-a">
          {Array.from({ length: 25 }).map((_, i) => (
            <li key={i} />
          ))}
        </ul>
        <ul className="sound-controls-app-screen-radio-b">
          {Array.from({ length: 26 }).map((_, i) => (
            <li key={i} />
          ))}
        </ul>
        <ul className="sound-controls-app-screen-radio-c">
          {Array.from({ length: 27 }).map((_, i) => (
            <li key={i} />
          ))}
        </ul>
      </div>
    </>
  )
}

/* Radio from United States */
const UnitedStatesRadio = () => {
  return (
    <>
      <div className="Contain-app-screen-radio us">

        <Vinyl />

        {/* Content text */}
        <div className="box-content-app-screen-radio">
          <div className="radio-glow" />

          <div className="contain-title-app-radio">
            <h3>Contenido</h3>
          </div>
          <div className="contain-text-app-radio">
            <p>etiquetas das dsad sadas dsadasdsadas dsa dsad</p>
          </div>
        </div>

        {/* Controls */}
        <div className="box-controls-app-screen-radio">
          <button className="button-controls-back-radio">
            <img className="image-controls-radio" src={doubleTriangle} alt="Atrás" />
          </button>

          <button className="button-controls-pause-radio">
            <img className="image-controls-radio" src={triangleArrow} alt="Pause" />
          </button>

          <button className="button-controls-forward-radio">
            <img className="image-controls-radio" src={doubleTriangle} alt="Adelante" />
          </button>
        </div>

        {/* Sound decoration */}
        <ul className="sound-controls-app-screen-radio-a">
          {Array.from({ length: 25 }).map((_, i) => (
            <li key={i} />
          ))}
        </ul>
        <ul className="sound-controls-app-screen-radio-b">
          {Array.from({ length: 26 }).map((_, i) => (
            <li key={i} />
          ))}
        </ul>
        <ul className="sound-controls-app-screen-radio-c">
          {Array.from({ length: 27 }).map((_, i) => (
            <li key={i} />
          ))}
        </ul>
      </div>
    </>
  )
}

/* Radio from Japan */
const JapanRadio = () => {
  return (
    <>
      <div className="Contain-app-screen-radio ja">
        <Vinyl />

        {/* Content text */}
        <div className="box-content-app-screen-radio">
          <div className="radio-glow" />

          <div className="contain-title-app-radio">
            <h3>Contenido</h3>
          </div>
          <div className="contain-text-app-radio">
            <p>etiquetas das dsad sadas dsadasdsadas dsa dsad</p>
          </div>
        </div>

        {/* Controls */}
        <div className="box-controls-app-screen-radio">
          <button className="button-controls-back-radio">
            <img className="image-controls-radio" src={doubleTriangle} alt="Atrás" />
          </button>

          <button className="button-controls-pause-radio">
            <img className="image-controls-radio" src={triangleArrow} alt="Pause" />
          </button>

          <button className="button-controls-forward-radio">
            <img className="image-controls-radio" src={doubleTriangle} alt="Adelante" />
          </button>
        </div>

        {/* Sound decoration */}
        <ul className="sound-controls-app-screen-radio-a">
          {Array.from({ length: 25 }).map((_, i) => (
            <li key={i} />
          ))}
        </ul>
        <ul className="sound-controls-app-screen-radio-b">
          {Array.from({ length: 26 }).map((_, i) => (
            <li key={i} />
          ))}
        </ul>
        <ul className="sound-controls-app-screen-radio-c">
          {Array.from({ length: 27 }).map((_, i) => (
            <li key={i} />
          ))}
        </ul>
      </div>
    </>
  )
}


export default RadioApp