/* Hooks */
import { useState, useEffect } from "react"

/* Images */
import colombia from "../../../../assets/Icons/Colombia.jpg"
import eeuu from "../../../../assets/Icons/United_States.jpg"
import japan from "../../../../assets/Icons/Japan.jpg"

/* ui */
import LoadingRadio from "../../ui/Cassette"

/* Components */
import { ColombiaRadio } from "./components/colombia.radio"
import { UnitedStatesRadio } from "./components/eeuu.radio"
import { JapanRadio } from "./components/japan.radio"



/* Render */
const RadioApp = () => {
  /* Render Images */
  type Country = {
    id: string
    img: string
    alt: string
    view: any
  }
  const countries: Country[] = [
    { id: "co", img: colombia, alt: "Colombia", view: <ColombiaRadio /> },
    { id: "us", img: eeuu, alt: "USA", view: <UnitedStatesRadio /> },
    { id: "ja", img: japan, alt: "Japan", view: <JapanRadio /> },
  ]

  /* Loading */
  const [loadingRadio, setLoadingRadio] = useState<boolean>(true)

  /* Views */
  const [currentView, setCurrentView] = useState("co")

  /* Select and open views from the countries */
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(countries[0])

  /* Filter countries */
  const availableCountries = countries.filter(
    country => country.id !== selected.id
  )
  

  /* Timer for the radio loading app */
  useEffect(() => {
    const id = setTimeout(() => {
      setLoadingRadio(prev => !prev)
    }, 2500)

    return () => clearTimeout(id)
  }, [])



  return (
    <>
      {loadingRadio ? <LoadingRadio /> : (
        <>
          <div className="country-select-screen-radio">

            <button className="button-select-app-radio" onClick={() => setOpen(prev => !prev)} aria-label="Select country">
              <img src={selected.img} alt={selected.alt} />
            </button>
            
            {open && (
              <ul className="list-country-app-radio">
                {availableCountries.map(c => (
                  <li 
                    key={c.id} 
                    onClick={() => {
                      setSelected(c)
                      setCurrentView(c.id)
                      setOpen(false)
                    }} 
                    tabIndex={0} 
                    role="button"
                  >
                    <img src={c.img} alt={c.alt} />
                  </li>
                ))}
              </ul>
            )}
            
          </div>

          <p className="text-fm-app-radio">FM</p>

          {currentView === "co" && <ColombiaRadio />}
          {currentView === "us" && <UnitedStatesRadio />}
          {currentView === "ja" && <JapanRadio />}

        </>
      )}
    </>
  )
}

export default RadioApp