/* Hooks */
import { useEffect, useState } from "react"

/* Back Button */
import { BackButton } from "../ui/BackButton"

/* images */
import wallpapper1 from "../../../../../assets/Wallpappers/lovely-sunset.jpg"
import wallpapper2 from "../../../../../assets/Wallpappers/pexels.jpg"
import wallpapper3 from "../../../../../assets/Wallpappers/pretty-landscape-japan.jpg"
import wallpapper4 from "../../../../../assets/Wallpappers/violet-lake-west.jpg"
  /* Wallpappers */
import picture1 from "../../../../../assets/Wallpappers/53119022025178.jpg"
import picture2 from "../../../../../assets/Wallpappers/53219022025114.jpg"
import picture3 from "../../../../../assets/Wallpappers/53219022025541.jpg"
import picture4 from "../../../../../assets/Wallpappers/53419022025156.jpg"
import picture5 from "../../../../../assets/Wallpappers/53519022025471.jpg"
import picture6 from "../../../../../assets/Wallpappers/53619022025564.jpg"
import picture7 from "../../../../../assets/Wallpappers/53819022025564.jpg"




/* Wallpappers in phone settings */
/* Eighth option in the settings */
export const Wallpapper = ({ back }: any) => {
  // Render images
  type ImageT = {
    id: number
    img: string
    alt: string
  } 
  const Images: ImageT[] = [
    { id: 1, img: wallpapper1, alt: "Landscapes - Lovely Sunset" },
    { id: 2, img: wallpapper2, alt: "Landscapes - Pexels" },
    { id: 3, img: wallpapper3, alt: "Landscapes - Pretty Japan" },
    { id: 4, img: wallpapper4, alt: "Landscapes - Violet Lake West" },
  ]
  const Pictures: ImageT[] = [
    { id: 1, img: picture1, alt: "Flower" },
    { id: 2, img: picture2, alt: "Rose" },
    { id: 3, img: picture3, alt: "Girl Alone" },
    { id: 4, img: picture4, alt: "Man Alone" },
    { id: 5, img: picture5, alt: "Landscape" },
    { id: 6, img: picture6, alt: "Landscape Women" },
    { id: 7, img: picture7, alt: "Landscape Man" },
  ]

  // Save wallpapper
  const [selected, setSelected] = useState<string | null>(null)
  // Success send data
  const [success, setSuccess] = useState(false)
  const [visible, setVisible] = useState(false)

  // Alternate images
  const [currentIndex, setCurrentIndex] = useState(0)


  // Update wallpapper
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Images.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [])


  // Save wallpapper
  const handleSetWallpapper = () => {
    if (!selected) return

    // Guardar wallpapper
    localStorage.setItem("wallpapper", selected)
    window.dispatchEvent(new Event("wallpapperChange"))

    // Reset estado (clave para que se repita siempre)
    setSuccess(false)
    setVisible(false)

    // Forzar nuevo ciclo
    setTimeout(() => {
      setSuccess(true)

      setTimeout(() => setVisible(true), 2000)
      setTimeout(() => setSuccess(false), 2300)
    }, 10)
  }



  return (
    <>
      <div className="contain-Wallpapper">

        <BackButton back={back} text="Fondo de pantalla" />

        <div className="box-view-Wallpapper">

          {/* Main Preview */}
          <div className="contain-view-Wallpapper">
            <div className="content-view-Wallpapper">
              <img src={selected || Images[currentIndex].img} alt="Preview" />
              <p>Vista previa</p>
              <p>Selecciona un fondo y aplica el cambio inmediatamente</p>
            </div>
          </div>

          {/* Button */}
          <div className="contain-add-option-Wallpapper">
            <button 
              className="button-add-Wallpapper"
              onClick={handleSetWallpapper}
              disabled={!selected}
            >
              Establecer fondo de pantalla
            </button>
          </div>

          {/* Wallpappers */}
          <div className="contain-view-select-Wallpapper">
            {Pictures.map(v => (
              <button 
                key={v.id} 
                className={`box-cards-option-Wallpapper ${selected === v.img ? "active" : ""}`}
                onClick={() => setSelected(v.img)}
              >
                <img src={v.img} alt={v.alt} />
              </button>
            ))}
          </div>

          {/* Alert */}
          {success && (
            <div className={`wallpapper-float ${visible ? "exit" : ""}`}>
              ¡Fondo actualizado!
            </div>
          )}

        </div>
      </div>
    </>
  )
}