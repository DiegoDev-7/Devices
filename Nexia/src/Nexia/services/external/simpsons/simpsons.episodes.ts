/* imports .env */
const SIMPSONS = import.meta.env.VITE_SIMPSONS_API
const SIMPSONS_IMAGE = import.meta.env.VITE_SIMPSONS_IMAGES_API



/* Characters from Simpsons */
export const getEpisodes = async () => {
  try {

    const res = await fetch(`${SIMPSONS}/episodes`)

    if (!res.ok) throw new Error(`HTTP error: ${res.status}`)

    return res.json()

  } catch (error: any) {

    throw new Error("Error retrieving The Simpsons episodes")

  }
}



/* Pages from the Simpsons */
export const changePageEpisodes = async (page: number) => {
  try {

    const res = await fetch(`${SIMPSONS}/episodes?page=${page}`)

    if (!res.ok) throw new Error(`HTTP error: ${res.status}`)

    return res.json()

  } catch (error: any) {

    throw new Error("Error changing page")

  }
}



/* Images from simpsons */
export const getEpisodesImage = SIMPSONS_IMAGE