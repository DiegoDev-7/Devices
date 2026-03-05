/* Back Button */
import { BackButton } from "../ui/BackButton"



/* About the phone settings */
/* First option in the settings */
export const AboutPhone = ({ back }: any) => {
  // Render text
  type Description = {
    id: number
    title: string
    text: string
  }
  const Description: Description[]  = [
    { id: 1, title: "Versión NEXIA", text: "NEXIA Global (1.7.5)" },
    { id: 2, title: "Versión de Android" , text: "1 DXVV1.175"},
    { id: 3, title: "Actualización de seguridad de Nexia", text: "2026-02-27" },
    { id: 4, title: "Modelo", text: "62027DV" },
  ]



  return (
    <>
      <div className="contain-top-aboutPhone">

        <BackButton back={back} text="Acerca del teléfono" />

        <div className="box-config-version-aboutPhone">
          <p className="title-aboutPhone">1.0</p>
          <p className="text-aboutPhone">Versión NEXIA</p>
          <p className="mobile-aboutPhone">NEXIA Global</p>
          <p className="number-aboutPhone">1.7.5</p>
        </div>

        <div className="box-config-name-aboutPhone">
          <p className="title-aboutPhone">Nombre del dispositivo</p>
          <p className="text-aboutPhone">Nexia rog 1</p>
        </div>

        <div className="box-config-size-aboutPhone">
          <p className="title-aboutPhone">Almacenamiento</p>
          <p className="text">Ocupado</p>
          <p className="text-size-a">40.2 GB/</p>
          <p className="text-size-b">128 GB</p>
        </div>

      </div>

      <div className="contain-bottom-aboutPhone">
        {Description.map(v => (
          <>    
            <div key={v.id} className="box-description-aboutPhone">
              <p className="text-description-a">{v.title}</p>
              <p className="text-description-b">{v.text}</p>
            </div>
          </>
        ))}
      </div>
      
    </>
  )
}