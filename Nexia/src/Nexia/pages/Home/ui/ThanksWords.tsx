/* i18n */
import { useLang } from "../../../../i18n/LangContext"

/* Images */
import heart from "../../../../assets/Icons/heart.svg"



/* Frame */
export const ThanksWords = () => {
  const { t } = useLang()

  return (
    <>
      <section id="gratitude" className="container-gratitude">

        <div className="contain-gratitude">
          <div className="box-gratitude">
            <img src={heart} alt="Imagen corazón" />
          </div>
          
          <h2>{t("home.thanks.title")}</h2>

          <p>
            {t("home.thanks.text1")}
          </p>
          
          <p>{t("home.thanks.text2")}</p>

          <p>
            {t("home.thanks.text3")}
          </p>
          
        </div>

      </section>
    </>
  )
}