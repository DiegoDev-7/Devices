/* Components */
import { ScrollIndicator } from "../../components/ScrollIndicator"

/* ui */
import { StartHome } from "./ui/StartHome"
import { PhoneDescription } from "./ui/PhoneDescription"
import { AppsDescription } from "./ui/AppsDescription"
import { SelectDevice } from "./ui/SelectDevice"
import { ThanksWords } from "./ui/ThanksWords"



/* Render */
const HomeRender = () => {
  return (
    <>
      <div className="container-main-home">

        {/* Scroll indicator window */}
        <ScrollIndicator />


        {/* Sections */}
        <StartHome />

        <PhoneDescription />

        <AppsDescription />

        <SelectDevice />

        <ThanksWords />

      </div>
    </>
  )
}

export default HomeRender