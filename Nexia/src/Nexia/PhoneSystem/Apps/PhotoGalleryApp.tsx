/* Hooks */
import { useEffect, useState } from "react"

/* Images */
import picture1 from "../../../assets/Wallpapers/53119022025178.jpg"
import picture2 from "../../../assets/Wallpapers/53219022025114.jpg"
import picture3 from "../../../assets/Wallpapers/53219022025541.jpg"
import picture4 from "../../../assets/Wallpapers/53419022025156.jpg"
import picture5 from "../../../assets/Wallpapers/53519022025471.jpg"
import picture6 from "../../../assets/Wallpapers/53619022025564.jpg"



/* Render */
type Props = {
  onBack: () => void
}
const PhotoGalleryApp = ({ onBack }: Props) => {
  const date = new Date()
  
  const [photos, setPhotos] = useState<Photos[]>([])

  type Photos = {
    id: number
    src: string
    alt: string
  }
  const PhotoGallery = async (): Promise<Photos[]> => [
    { id: 1, src: picture1, alt: "Fondo de pantalla rosas" },
    { id: 2, src: picture2, alt: "Fondo de pantalla ninja" },
    { id: 3, src: picture3, alt: "Fondo de pantalla arboles" },
    { id: 4, src: picture4, alt: "Fondo de pantalla solitario" },
    { id: 5, src: picture5, alt: "Fondo de pantalla paraiso" },
    { id: 6, src: picture6, alt: "Fondo de pantalla mujer en el paraiso" },
  ]

  useEffect(() => {
    const loadPhotos = async () => {
      const data = await PhotoGallery()
      setPhotos(data)
    }

    loadPhotos()
  }, [])


  return (
    <>
      <div className="Container-app-screen-photogallery">

        <div className="box-app-screen-photogallery-a">
          <p>Fotos</p>
        </div>

        <div className="box-app-screen-photogallery-b">

          <div className="contain-title-date-photogallery">
            <p>{String(date.getDay() + 1).padStart(2, "0")}/{String(date.getMonth() + 1).padStart(2, "0")}/{String(date.getFullYear()).padStart(2, "0")}</p>
          </div>
          <div className="contain-photos-photogallery">

            {photos.map((v) => (
              <button key={v.id} className="box-image-photogallery">
                <img className="image-photogallery" src={v.src} alt={v.alt} />
              </button>
            ))}

          </div>

        </div>

      </div>
    </>
  )
}

export default PhotoGalleryApp