/* Hooks */
import { useLang } from "../../../i18n/LangContext"

/* Profile option */
export default function Profile() {
  const { t } = useLang()

  return (
    <div className="container-settings-section">
      <div className="panel-section profile-section">

        <h2>{t("auth.profile.title")}</h2>

        <div className="profile-intro">
          <p>
            {t("auth.profile.intro")}
          </p>
        </div>

        <div className="profile-features">

          <div className="profile-feature">
            <h4>{t("auth.profile.applications")}</h4>
            <p>
              {t("auth.profile.applicationsDesc")}
            </p>
          </div>

          <div className="profile-feature">
            <h4>{t("auth.profile.finance")}</h4>
            <p>
              {t("auth.profile.financeDesc")}
            </p>
          </div>

          <div className="profile-feature">
            <h4>{t("auth.profile.settings")}</h4>
            <p>
              {t("auth.profile.settingsDesc")}
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}