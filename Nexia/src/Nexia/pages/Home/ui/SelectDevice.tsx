/* React */
import { Link } from "react-router-dom"

/* i18n */
import { useLang } from "../../../../i18n/LangContext"

/* Images */
import danger from "../../../../assets/Wallpappers/danger.png"



/* Frame */
export const SelectDevice = () => {
  const { t } = useLang()

  const token = localStorage.getItem("token")
  const bankAccount = localStorage.getItem("bank_account")

  // Render text and link
  type Description = {
    id: number
    title: string
    text: string
    link: string
    requiresBank: boolean
  }
  const devices: Description[] = [
    {
      id: 1,
      title: t("home.devices.mobile.title"),
      text: t("home.devices.mobile.text"),
      link: "/Phone",
      requiresBank: false
    },
    {
      id: 2,
      title: t("home.devices.atm.title"),
      text: t("home.devices.atm.text"),
      link: "/ATM",
      requiresBank: true
    }
  ]

  

  return (
    <>
      <section id="devices" className="container-devices">

        <div className="contain-devices">
          <div className="box-devices">

            <h2>{t("home.devices.title")}</h2>

            <br />

            <p>
              {t("home.devices.description")}
            </p>

            {devices.map((device) => {
              const isLogged = !!token
              const hasBank = !!bankAccount

              const blockedByAuth = !isLogged
              const blockedByBank = device.requiresBank && !hasBank

              const isBlocked = blockedByAuth || blockedByBank

              let message = ""

              if (blockedByAuth) {
                message = t("home.devices.authRequired")
              } else if (blockedByBank) {
                message = t("home.devices.bankRequired")
              }

              return (
                <Link
                  key={device.id}
                  className="link-devices"
                  to={isBlocked ? "#" : device.link}
                  onClick={(e) => {
                    if (isBlocked) e.preventDefault()
                  }}
                >

                  <div className={isBlocked ? "blur-layer" : ""}>
                    <h3>{device.title}</h3>
                    <p>{device.text}</p>
                  </div>

                  {isBlocked && (
                    <div className="container-danger">
                      <img
                        className="image-danger"
                        src={danger}
                        alt="bloqueado"
                      />

                      <p>{message}</p>
                    </div>
                  )}

                </Link>
              )
            })}

          </div>
        </div>

      </section>
    </>
  )
}