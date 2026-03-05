/* Back Button */
import { BackButton } from "../ui/BackButton"



/* Services in phone settings */
/* Thirteenth option in the settings */
export const Services = ({ back }: any) => {
  return (
    <>
      <div className="contain-services">
        
        <BackButton back={back} text="Servicios y Comentarios" />
        
      </div>
    </>
  )
}