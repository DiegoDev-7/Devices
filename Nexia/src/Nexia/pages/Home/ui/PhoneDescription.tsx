/* i18n */
import { useLang } from "../../../../i18n/LangContext"



/* Frame */
export const PhoneDescription = () => {
  const { t } = useLang()

  return (
    <>
      <section id="description" className="container-phoneDescription">
        <div className="contain-phoneDescription">
          <h2>{t("home.description.title")}</h2>

          <p>
            {t("home.description.text1")}
          </p>

          <p>
            {t("home.description.text2")}
          </p>
          
          <p>{t("home.description.text3")}</p>
        </div>
      </section>
    </>
  )
}