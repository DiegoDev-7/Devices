import { Link } from "react-router-dom"
import { useLang } from "../../../i18n/LangContext"



/* Terms and privacy - footer for the home, login and register */
export const TermsPrivacy = () => {
  const { t } = useLang()

  return (
    <>
       <div className="interfaz-terms-privacy">

        <p className="terms">
          {t("auth.termsPrivacy.prefix")}
          <Link to="/terms"> {t("common.footer.terms")} </Link> 
          {t("auth.termsPrivacy.and")}
          <Link to="/privacy"> {t("auth.termsPrivacy.privacy")}</Link>.
        </p>

      </div>
    </>
  )
}