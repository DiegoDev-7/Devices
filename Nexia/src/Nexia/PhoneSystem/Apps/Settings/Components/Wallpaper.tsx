/* Hooks */
import { useEffect, useState } from "react"

/* Back Button */
import { BackButton } from "../ui/BackButton"

/* images */
import wallpaper1 from "../../../../../assets/Wallpapers/lovely-sunset.jpg"
import wallpaper2 from "../../../../../assets/Wallpapers/pexels.jpg"
import wallpaper3 from "../../../../../assets/Wallpapers/pretty-landscape-japan.jpg"
import wallpaper4 from "../../../../../assets/Wallpapers/violet-lake-west.jpg"
  /* Wallpappers */
import picture1 from "../../../../../assets/Wallpapers/53119022025178.jpg"
import picture2 from "../../../../../assets/Wallpapers/53219022025114.jpg"
import picture3 from "../../../../../assets/Wallpapers/53219022025541.jpg"
import picture4 from "../../../../../assets/Wallpapers/53419022025156.jpg"
import picture5 from "../../../../../assets/Wallpapers/53519022025471.jpg"
import picture6 from "../../../../../assets/Wallpapers/53619022025564.jpg"
import picture7 from "../../../../../assets/Wallpapers/53819022025564.jpg"




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
    { id: 1, img: wallpaper1, alt: "Landscapes - Lovely Sunset" },
    { id: 2, img: wallpaper2, alt: "Landscapes - Pexels" },
    { id: 3, img: wallpaper3, alt: "Landscapes - Pretty Japan" },
    { id: 4, img: wallpaper4, alt: "Landscapes - Violet Lake West" },
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


  // Alternate images
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Images.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [])



  return (
    <>
      <div className="contain-Wallpaper">
        
        <BackButton back={back} text="Fondo de pantalla" />

        <div className="box-view-Wallpaper">

          <div className="contain-view-Wallpaper">
            <div className="content-view-Wallpaper">
              <img src={Images[currentIndex].img} alt={Images[currentIndex].alt} />
              <p>Fondos de pantalla móviles</p>
              <p>Elija entre diferentes tipos de fondos de pantalla</p>
            </div>
          </div>

          <div className="contain-add-option-Wallpaper">
            <button className="button-add-Wallpaper">Establecer fondo de pantalla</button>
          </div>

          <div className="contain-view-select-Wallpaper">
            {Pictures.map(v => (
              <button key={v.id} className="box-cards-option-Wallpaper">
                <img src={v.img} alt={v.alt} />
              </button>
            ))}
          </div>

        </div>

      </div>
    </>
  )
}
