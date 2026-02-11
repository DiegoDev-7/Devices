/* imports .env */
const SIMPSONS = import.meta.env.VITE_SIMPSONS_EPISODES_API
const SIMPSONS_IMAGE = import.meta.env.VITE_SIMPSONS_IMAGES_API



/* Characters from Simpsons */
export const getEpisodes = async () => {
  try {
    const res = await fetch(`${SIMPSONS}`)

    if (!res.ok) throw new Error('Error fetching characters')

    return res.json()
  } catch (error) {
    console.log(`Simpsons error: ${error}`)
  }
}

/* Pages from the Simpsons */
export const changePageEpisodes = async (page: number) => {
  try {
    const res = await fetch(`${SIMPSONS}?page=${page}`)

    if (!res.ok) throw new Error('Error fetching characters')

    return res.json()
  } catch (error) {
    console.log(`Simpsons error: ${error}`)
  }
}

/* Images from simpsons */
export const getEpisodesImage = SIMPSONS_IMAGE