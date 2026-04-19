/* Hooks */
import { useState } from "react"

/* i18n */
import { useLang } from "../../../i18n/LangContext"



/* Render tempsAndConditions */
const TermsAndConditions = () => {
  const { t } = useLang()

  // Copy the email
  const [emailCopied, setEmailCopied] = useState(false)

  
  // Button to copy email
  const handleEmailCopy = () => {
    navigator.clipboard.writeText("dxvvdev@gmail.com")
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }



  return (
    <section className="container-terminos">
      <div className="contain-terminos">
        <h2>{t("terms.title")}</h2>

        <p>
          {t("terms.welcome")}
        </p>

        <h3>{t("terms.definitions.title")}</h3>
        <p>
          {t("terms.definitions.content")}
        </p>

        <h3>{t("terms.access.title")}</h3>
        <p>
          {t("terms.access.content")}
        </p>

        <h3>{t("terms.obligations.title")}</h3>
        <ul>
          {t("terms.obligations.list").map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>{t("terms.intellectual.title")}</h3>
        <p>
          {t("terms.intellectual.content1")}
        </p>
        <p>
          {t("terms.intellectual.content2")}
        </p>

        <h3>{t("terms.thirdParty.title")}</h3>
        <p>
          {t("terms.thirdParty.content")}
        </p>

        <h3>{t("terms.privacy.title")}</h3>
        <p>
          {t("terms.privacy.content")}
        </p>

        <h3>{t("terms.cookies.title")}</h3>
        <p>
          {t("terms.cookies.content")}
        </p>

        <h3>{t("terms.userContent.title")}</h3>
        <p>
          {t("terms.userContent.content")}
        </p>

        <h3>{t("terms.disclaimer.title")}</h3>
        <p>
          {t("terms.disclaimer.content")}
        </p>

        <h3>{t("terms.security.title")}</h3>
        <p>
          {t("terms.security.content")}
        </p>

        <h3>{t("terms.modifications.title")}</h3>
        <p>
          {t("terms.modifications.content")}
        </p>

        <h3>{t("terms.termination.title")}</h3>
        <p>
          {t("terms.termination.content")}
        </p>

        <h3>{t("terms.jurisdiction.title")}</h3>
        <p>
          {t("terms.jurisdiction.content")}
        </p>

        <h3>{t("terms.contact.title")}</h3>
        <p>
          {t("terms.contact.intro")}
          <span 
            className={`email-copy ${emailCopied ? 'copied' : ''}`}
            onClick={handleEmailCopy}
            style={{cursor: 'pointer'}}
          >
            dxvvdev@gmail.com
          </span>
          {" "}{t("terms.contact.discord")}
        </p>
        <p>
          {t("terms.contact.response")}
        </p>

        <p>
          {t("terms.lastUpdate")}
        </p>
      </div>
    </section>
  )
}

export default TermsAndConditions
