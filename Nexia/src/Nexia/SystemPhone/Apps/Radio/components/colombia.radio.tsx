/* Hooks */
import { useEffect, useState } from "react"

/* Images */
import paused from "../../../../../assets/Icons/pause_dark.svg"
import triangleArrow from "../../../../../assets/Icons/triangleArrow_dark.svg"
import doubleTriangle from "../../../../../assets/Icons/double_triangleArrow_dark.svg"

/* core */
import { useAudio } from "../../../core/AudioContext"

/* ui */
import Vinyl from "../../../ui/Vinyl"

/* Services */
import { getRadioColombia } from "../../../../services/external/radio/colombia.service"
import { SoundAnimation, SoundAnimationStop } from "../../../../components/SoundAnimation"
import { LoadingIconPoints } from "../../../../components/loading.ldrs"



/* Radio from Colombia */
type Radio = {
  name: string
  country: string
  countryCode: string
  codec: string
  favicon: string
  language: string
  languagecodes: string
  stream: string
  tags: string[]
}
export const ColombiaRadio = () => {
  const { audioRef, volume, setVolumeDirect, playPause } = useAudio()
  
  const [isPlaying, setIsPlaying] = useState(false)
  const [radios, setRadios] = useState<Radio[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentRadio = radios[currentIndex] || null
  

  // Controls from audio
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



  // Get radio Colombia
  const fetchRadio = async () => {
    try {
      const res = await getRadioColombia()

      const radios = res.data
        ?.map((item: any) => item.data?.[0])
        ?.filter(Boolean)

      setRadios(radios || [])

    } catch (error) {

      console.error("Error fetching radios:", error)
      
    }
  }
  useEffect(() => {
    fetchRadio()
  }, [])


  // Sound load
  useEffect(() => {
    if (!currentRadio || !audioRef.current) return

    audioRef.current.src = currentRadio.stream

    if (isPlaying) {
      audioRef.current.play()
    }
  }, [currentIndex])


  // Control next radio
  const nextRadio = () => {
    setCurrentIndex((prev) =>
      prev === radios.length - 1 ? 0 : prev + 1
    )
  }

  // Previous radio control
  const prevRadio = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? radios.length - 1 : prev - 1
    )
  }


  
  return (
    <>
      <div className="Contain-app-screen-radio co">


        {/* Sound */}
        <audio
          ref={audioRef}
          src={currentRadio?.stream || ""}
          preload="none"
          onCanPlay={() => {
            if (isPlaying) {
              audioRef.current?.play().catch(() => {})
            }
          }}
        />


        {/* Icon vinyl */}
        <Vinyl />


        {/* Content */}
        <div className="box-content-app-screen-radio">

          <div className="radio-glow" />

          <div className="contain-title-app-radio">
            <h3>
              {currentRadio ? `Emisora ${currentRadio.name}` : "Cargando..."}
            </h3>
          </div>

          <div className="contain-image-station-app-radio">
            {currentRadio && (
              <img src={currentRadio.favicon} alt={currentRadio.name} />
            )}
          </div>

          <div className="contain-text-app-radio">
            <p>
              {Array.isArray(currentRadio?.tags)
                ? currentRadio?.tags?.slice(0, 10).join(", ") + "..."
                : currentRadio?.tags || "Sin etiquetas"}
            </p>
          </div>

          <div className="contain-context-title-app-radio">
            <p>Reproducción</p>
          </div>

          <div className="contain-context-app-radio">
            <p>{currentRadio?.codec}</p>
            <p>{currentRadio?.countryCode}</p>
            <p>{currentRadio?.language}</p>
            <p>{currentRadio?.languagecodes}</p>
          </div>

        </div>


        {/* Controls */}
        <div className="box-controls-app-screen-radio">

          {/* Loading */}
          {!currentRadio ? (
            <div className="box-loading-screen-radio">
              <LoadingIconPoints />
            </div>
          ) : isPlaying ? (
            <div className="box-sound-screen-radio">
              <SoundAnimation />
            </div>
          ) : (
            <div className="box-sound-screen-radio">
              <SoundAnimationStop />
            </div>
          )}
          

          {/* Buttons */}
          <button className="button-controls-back-radio" onClick={prevRadio}>
            <img className="image-controls-radio" src={doubleTriangle} alt="Atrás" />
          </button>

          <button className="button-controls-pause-radio" onClick={playPause}>
            <img
              className="image-controls-radio"
              src={isPlaying ? paused : triangleArrow}
              alt="Pause"
            />
          </button>

          <button className="button-controls-forward-radio" onClick={nextRadio}>
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