/* Hooks */
import { useEffect, useState } from "react"


/* Api Simpsons */
  // Characters
import { getCharacters, changePageCharacters, getCharactersImage } from "../../services/external/simpsons/simpsons.characters"
  // Locations
import { getLocations, changePageLocations, getLocationsImage } from "../../services/external/simpsons/simpsons.locations"
  // Episodes
import { getEpisodes, changePageEpisodes, getEpisodesImage } from "../../services/external/simpsons/simpsons.episodes"


/* Images */
import simpson from "../../../assets/Apps/Simsons.jpg"
import simpsonsLogo from "../../../assets/Icons/The_Simpsons_yellow_logo.svg"
import triangleArrow_dark from "../../../assets/Icons/triangleArrow_dark.svg"



/* Render */
const SimpsonsApp = () => {
  /* Loading simpsons */
  const [loadingPage, setLoadingPage] = useState<boolean>(true)

  /* Loading the Simpsons page when enter to the app */
  useEffect(() => {
    const id = setTimeout(() => {
      setLoadingPage(prev => !prev)
    }, 2500)

    return () => clearTimeout(id)
  }, [])



  return (
    <>
      <div className="Container-app-screen-simpsons">
        
        <div className="box-app-screen-simpsons-a">
          {loadingPage ? (
            <>
              <img className="image-logo-app-simpsons" src={simpsonsLogo} alt="The Simpsons Logo" />
              <img className="image-app-face-simpsons" src={simpson} alt="Homero simpson" />
            </>
          ) : <CardsSimpsons /> }
        </div>

      </div>
    </>
  )
}



/* Select pages */
const CardsSimpsons = () => {
  /* Pages */
  const [currentView, setCurrentView] = useState("Characters")



  return (
    <>
      <div className="box-app-screen-simpsons-b">

        {/* Buttons to select functions in the simpsons */}
        <div className="contain-buttons-section-simpsons">

          <div className="contain-image-sections-simpsons">
            <img className="image-sections-simpsons" src={simpsonsLogo} alt="The Simpsons Logo" />
          </div>

          <button className="button-section-simpsons" onClick={() => setCurrentView("Characters")}>
            Personajes
          </button>
          <button className="button-section-simpsons" onClick={() => setCurrentView("Locations")}>
            Locations
          </button>
          <button className="button-section-simpsons" onClick={() => setCurrentView("Episodes")}>
            Episodes
          </button>

        </div>


        {/* Cards */}
        <div className="card-screen-simpsons">
          {currentView === "Characters" && <CharactersSimpsons />}
          {currentView === "Locations" && <LocationsSimpsons />}
          {currentView === "Episodes" && <EpisodesSimpsons />}
        </div>

      </div>
    </>
  )
}



/* Screen characters simpsons */
const CharactersSimpsons = () => {
  /* Api simpsons */
  type Character = {
    id: number
    name: number
    age: number
    occupation: string
    portrait_path: string
    status?: string
  }
  const [dataSimpsons, setDataSimpsons] = useState<Character[]>([])
  const [page, setPage] = useState(1)

  /* Change card */
  const [index, setIndex] = useState(0)
  
  /* Get api from simpsons and render the image */
  useEffect(() => {
    getCharacters().then(data => {
      setDataSimpsons(data.results)
    })
  }, [])

  /* Change page from character */
  useEffect(() => {
    changePageCharacters(page).then(data => {
      setDataSimpsons(data.results)
      setIndex(0)
    })
  }, [page])

  /* Api options */
  const current = dataSimpsons[index]



  return (
    <>
      {/* Buttons for the pages */}
      <div className="contain-buttons-page-simpsons">
        {page > 0 && (
          <button className="button-simpsons button-simpsons--page button-simpsons--page-less" onClick={() => setPage(p => Math.max(p - 1, 1))}>
            <img className="image-triangle-arrow-less-simpsons" src={triangleArrow_dark} alt="Arrow less" />
          </button>
        )}

        <span>{page}</span>

        {page < 60 && (
          <button className="button-simpsons button-simpsons--page button-simpsons--page-more" onClick={() => setPage(p => p + 1)}>
            <img className="image-triangle-arrow-less-simpsons" src={triangleArrow_dark} alt="Arrow less" />
          </button>
        )}
      </div>
      
      
      {/* Buttons less */}
      {index > 0 && (
        <button className="button-simpsons button-simpsons--inner-less" onClick={() => setIndex(i => Math.max(i - 1, 0))}>
          <img className="image-triangle-arrow-less-simpsons" src={triangleArrow_dark} alt="Arrow less" />
        </button>
      )}

      {/* Cards */}
      {current && (
        <div className="card-things-simpsons">

          <div className="card-box-simpsons-a">
            <img
              className="card-image-simpsons"
              src={`${getCharactersImage}${current.portrait_path}`}
              alt="{current.name}"
            />
          </div>

          <div className="card-box-simpsons-b">
            <h3>{current.name}</h3>
            <p>{current.occupation.split(" ").slice(0, 3).join(" ")}</p>
            <p>edad: {current.age ? current.age : "none"}</p>
            <div>
              <span className={current.status === "Alive" ? "status-alive" : "status-deceased"}>{current.status}</span>
            </div>
          </div>

        </div>
      )}
      
      {/* Button more */}
      {index < dataSimpsons.length - 1 && (
        <button className="button-simpsons button-simpsons--inner-more" onClick={() => setIndex(i => Math.min(i + 1, dataSimpsons.length - 1))}>
          <img className="image-triangle-arrow-more-simpsons" src={triangleArrow_dark} alt="Arrow more" />
        </button>
      )}
    </>
  )
}


/* Screen Locations Simpsons */
const LocationsSimpsons = () => {
  /* Api simpsons */
  type Character = {
    id: number
    image_path: string
    name: string
    town: string
    use: string
  }
  const [dataSimpsons, setDataSimpsons] = useState<Character[]>([])
  const [page, setPage] = useState(1)

  /* Change card */
  const [index, setIndex] = useState(0)
  
  /* Get api from simpsons and render the image */
  useEffect(() => {
    getLocations().then(data => {
      setDataSimpsons(data.results)
    })
  }, [])

  /* Change page from character */
  useEffect(() => {
    changePageLocations(page).then(data => {
      setDataSimpsons(data.results)
      setIndex(0)
    })
  }, [page])

  /* Api options */
  const current = dataSimpsons[index]



  return (
    <>
      {/* Buttons for the pages */}
      <div className="contain-buttons-page-simpsons">
        {page > 0 && (
          <button className="button-simpsons button-simpsons--page button-simpsons--page-less" onClick={() => setPage(p => Math.max(p - 1, 1))}>
            <img className="image-triangle-arrow-less-simpsons" src={triangleArrow_dark} alt="Arrow less" />
          </button>
        )}

        <span>{page}</span>

        {page < 24 && (
          <button className="button-simpsons button-simpsons--page button-simpsons--page-more" onClick={() => setPage(p => p + 1)}>
            <img className="image-triangle-arrow-less-simpsons" src={triangleArrow_dark} alt="Arrow less" />
          </button>
        )}
      </div>

      
      {/* Buttons less */}
      {index > 0 && (
        <button className="button-simpsons button-simpsons--inner-less" onClick={() => setIndex(i => Math.max(i - 1, 0))}>
          <img className="image-triangle-arrow-less-simpsons" src={triangleArrow_dark} alt="Arrow less" />
        </button>
      )}

      {/* Cards */}
      {current && (
        <div className="card-things-simpsons">

          <div className="card-box-simpsons-a">
            <img
              className="card-image-simpsons"
              src={`${getLocationsImage}${current.image_path}`}
              alt="{current.name}"
            />
          </div>

          <div className="card-box-simpsons-b">
            <h3>{current.name.split(" ").slice(0, 3).join(" ")}</h3>
            <p>Edificio: {current.town ? current.town : "none"}</p>
            <p>uso: {current.use ? current.town : "none"}</p>
          </div>

        </div>
      )}
      
      {/* Button more */}
      {index < dataSimpsons.length - 1 && (
        <button className="button-simpsons button-simpsons--inner-more" onClick={() => setIndex(i => Math.min(i + 1, dataSimpsons.length - 1))}>
          <img className="image-triangle-arrow-more-simpsons" src={triangleArrow_dark} alt="Arrow more" />
        </button>
      )}
    </>
  )
}


/* Screen Episodes Simpsons */
const EpisodesSimpsons = () => {
  /* Api simpsons */
  type Character = {
    id: number
    season: number
    episode_number: number
    name: any
    image_path: string
    synopsis: string
  }
  const [dataSimpsons, setDataSimpsons] = useState<Character[]>([])
  const [page, setPage] = useState(1)

  /* Change card */
  const [index, setIndex] = useState(0)
  
  /* Get api from simpsons and render the image */
  useEffect(() => {
    getEpisodes().then(data => {
      setDataSimpsons(data.results)
    })
  }, [])

  /* Change page from character */
  useEffect(() => {
    changePageEpisodes(page).then(data => {
      setDataSimpsons(data.results)
      setIndex(0)
    })
  }, [page])

  /* Api options */
  const current = dataSimpsons[index]

  

  return (
    <>
      {/* Buttons for the pages */}
      <div className="contain-buttons-page-simpsons">
        {page > 0 && (
          <button className="button-simpsons button-simpsons--page button-simpsons--page-less" onClick={() => setPage(p => Math.max(p - 1, 1))}>
            <img className="image-triangle-arrow-less-simpsons" src={triangleArrow_dark} alt="Arrow less" />
          </button>
        )}

        <span>{page}</span>

        {page < 39 && (
          <button className="button-simpsons button-simpsons--page button-simpsons--page-more" onClick={() => setPage(p => p + 1)}>
            <img className="image-triangle-arrow-less-simpsons" src={triangleArrow_dark} alt="Arrow less" />
          </button>
        )}
      </div>

      
      {/* Buttons less */}
      {index > 0 && (
        <button className="button-simpsons button-simpsons--inner-less" onClick={() => setIndex(i => Math.max(i - 1, 0))}>
          <img className="image-triangle-arrow-less-simpsons" src={triangleArrow_dark} alt="Arrow less" />
        </button>
      )}

      {/* Cards */}
      {current && (
        <div className="card-things-simpsons">

          <div className="card-box-simpsons-a">
            <img
              className="card-image-simpsons"
              src={`${getEpisodesImage}${current.image_path}`}
              alt="{current.name}"
            />
          </div>

          <div className="card-box-simpsons-b">
            <h3>{current.name.split(" ").slice(0, 3).join(" ")}</h3>
            <p>Temporada: {current.season}</p>
            <p>Capitulo: {current.episode_number}</p>
            <div>
              <span>{current.synopsis.split(" ").slice(0, 6).join(" ")}</span>
            </div>
          </div>

        </div>
      )}
      
      {/* Button more */}
      {index < dataSimpsons.length - 1 && (
        <button className="button-simpsons button-simpsons--inner-more" onClick={() => setIndex(i => Math.min(i + 1, dataSimpsons.length - 1))}>
          <img className="image-triangle-arrow-more-simpsons" src={triangleArrow_dark} alt="Arrow more" />
        </button>
      )}
    </>
  )
}



export default SimpsonsApp