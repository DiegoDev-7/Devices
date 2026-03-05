/* Hooks */
import { useEffect, useState } from "react"



/* Scroll indicator in the part left window */
export const ScrollIndicator = () => {
  // Render text
  type Section = {
    id: string;
    label: string;
  }
  const sections: Section[] = [
    { id: "start", label: "Inicio" },
    { id: "description", label: "Descripción" },
    { id: "apps", label: "Aplicaciones" },
    { id: "devices", label: "Dispositivos" },
    { id: "gratitude", label: "Nexia" },
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