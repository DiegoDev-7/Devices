import { Link } from "react-router-dom"

/* i18n */
import { useLang } from "../../../i18n/LangContext"



/* Render footer */
const Footer = () => {
  const { t } = useLang()

  return (
    <>
      <footer className="cntnrFooter">
        
        <p>{t("common.footer.copyright")}</p>
        
        <Link className="lnkFooter" to="/terms">
          {t("common.footer.terms")}
        </Link>
        
      </footer>
    </>
  )
}

export default Footer