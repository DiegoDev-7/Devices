/* i18n */
import { useLang } from "../../../../i18n/LangContext"

/* Images */
import NexiaWord from "../../../../assets/Nexia/NexiaWord.webp"
import Nexia from "../../../../assets/Nexia/NexiaWhite.svg"



/* Frame */
export const StartHome = () => {
  const { t } = useLang()

  // Access the devices by clicking on the model view
  const goTo: any = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })
  }



  return (
    <>
      <section id="start" className="container-home">

        <div className="contain-home">

          <div className="box-home-a">

            <div className="contain-image-home">

              <img src={NexiaWord} alt="Nexia OS" />

              <div className="line-divider-home" />

            </div>

            <p>
              {t("home.start.description1")}
            </p>

            <p>{t("home.start.description2")}</p>

          </div>


          {/* Cards */}
          <div className="box-home-b">

            <div className="card-home">

              <div className="box-card-home a">
                <img src={Nexia} alt="Nexia" />
              </div>

              <div className="box-card-home b">
                <img src={Nexia} alt="Nexia" />
              </div>

            </div>

            <button className="button-home" onClick={() => goTo("devices")}>
              {t("home.start.selectDevice")}
            </button>

          </div>
          
        </div>

      </section>
    </>
  )
}