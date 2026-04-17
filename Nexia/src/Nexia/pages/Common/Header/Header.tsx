/* React */
import { memo, useState } from "react"
import { Link } from "react-router-dom"

/* Images */
import nexia from "../../../../assets/Nexia/Nexia.svg"

/* Components */
import { PanelAuth } from "../../../auth/PanelsAuth"
import { IconsContain } from "./components/IconsHeader"



/* Render header */
const Header = memo(() => {
  const [option, setOption] = useState<boolean>(true)
  
  const handleoption = () => {
    setOption(prev => !prev)
  }



  return (
    <>
      <header className="container-header">

        <nav className="box-header-a">

          <Link className="contain-image-header" to={"/"}>
            <img className={`image-header-nexia ${!option ? "enter" : "exit"}`} src={nexia} alt="Nexia logo" />
          </Link>

        </nav>

        <nav className="box-header-b">

          {option && <IconsContain clickOption={handleoption} /> }
          
        </nav>

        {!option && <PanelAuth clickOption={handleoption} /> }

      </header>
    </>
  )
})


Header.displayName = "Header"


export default Header