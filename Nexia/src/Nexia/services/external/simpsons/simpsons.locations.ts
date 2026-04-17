/* imports .env */
const SIMPSONS = import.meta.env.VITE_SIMPSONS_API
const SIMPSONS_IMAGE = import.meta.env.VITE_SIMPSONS_IMAGES_API



/* Characters from Simpsons */
export const getLocations = async () => {
  try {

    const res = await fetch(`${SIMPSONS}/locations`)

    if (!res.ok) throw new Error(`HTTP error: ${res.status}`)

    return res.json()

  } catch (error) {

    throw new Error("Error retrieving The Simpsons locations")

  }
}



/* Pages from the Simpsons */
export const changePageLocations = async (page: number) => {
  try {

    const res = await fetch(`${SIMPSONS}/locations?page=${page}`)

    if (!res.ok) throw new Error(`HTTP error: ${res.status}`)

    return res.json()

  } catch (error) {

    throw new Error("Error changing page")

  }
}



/* Images from simpsons */
export const getLocationsImage = SIMPSONS_IMAGE