import { Navigate } from "react-router-dom"

/* i18n */
import { useLang } from "../../../i18n/LangContext"

/* Phone */
import AtmSys from "../../SystemAtm/AtmSys"

/* Images */
import rose_light from "../../../assets/Nexia/rose_light.svg"



/* Render */
const DeviceatmRender = () => {
  const { t } = useLang()

  // If the user has a token, enter the page otherwise not
  const bankAccount = localStorage.getItem("bank_account")
  
  if (!bankAccount) return <Navigate to="/" />



  return (
    <>
      <div className="container-main-atm">

        {/* Nexia Rose, text */}
        <section className="box-atm-a">
          <div className="box-image-atm-rose">
            <img src={rose_light} alt="Nexia rose" />
          </div>
        </section>


        {/* Cellatm */}
        <section className="box-atm-b">

          <AtmSys />

        </section>


        {/* Context of the atm */}
        <section className="box-atm-c">

          <div className="atm-info">

            <h3>{t("devices.atm.title")}</h3>

            <p>
              {t("devices.atm.description1")}
            </p>

            <p>
              {t("devices.atm.description2")}
            </p>

            <p>
              {t("devices.atm.description3")}
            </p>

          </div>

        </section>

      </div>
    </>
  )
}

export default DeviceatmRender