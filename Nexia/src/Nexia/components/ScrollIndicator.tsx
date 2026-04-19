/* Hooks */
import { useEffect, useState } from "react"

/* i18n */
import { useLang } from "../../i18n/LangContext"



/* Scroll indicator in the part left window */
export const ScrollIndicator = () => {
  const { t } = useLang()

  // Render text
  type Section = {
    id: string;
    label: string;
  }
  const sections: Section[] = [
    { id: "start", label: t("navigation.start") },
    { id: "description", label: t("navigation.description") },
    { id: "apps", label: t("navigation.apps") },
    { id: "devices", label: t("navigation.devices") },
    { id: "gratitude", label: t("navigation.gratitude") },
  ]

  
  // Call animation and view screen to render
  const [active, setActive] = useState<string>(sections[0].id)

  
  // Observer for the scroll
  useEffect(() => {
    const observer: any = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach(s => {
      const el: any = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  
  // Load scroll to view interface
  const goTo: any = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })
  }



  return (
    <>
      <div className="scroll-progress">
        <div className="dots">
          {sections.map(section => (
            <div
              key={section.id}
              className={`dot-item ${active === section.id ? "active" : ""}`}
            >
              <span className="font-dot-label">
                {section.label}
              </span>

              <button
                className="dot"
                onClick={() => goTo(section.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}