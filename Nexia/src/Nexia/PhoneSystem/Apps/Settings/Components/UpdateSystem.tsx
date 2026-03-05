/* Back Button */
import { BackButton } from "../ui/BackButton"



/* Update the phone settings system */
/* Second option in the settings */
export const UpdateSystem = ({ back }: any) => {
  return (
    <>
      <div className="contain-updateSystem">

        <BackButton back={back} text="Actualizaciones del sistema" />

        <div className="box-alert-updatesystem">
          <span>!</span>
          <p className="text-alert-updatesystem">Todas las Actualizaciones del sistema están actualizadas.</p>
        </div>
        
      </div>
    </>
  )
}