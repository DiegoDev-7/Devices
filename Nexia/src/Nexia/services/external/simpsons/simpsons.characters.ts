/* imports .env */
const SIMPSONS = import.meta.env.VITE_SIMPSONS_CHARACTERS_API
const SIMPSONS_IMAGE = import.meta.env.VITE_SIMPSONS_IMAGES_API



/* Characters from Simpsons */
export const getCharacters = async () => {
  try {
    const res = await fetch(`${SIMPSONS}/characters`)

    if (!res.ok) throw new Error('Error fetching characters')

    return res.json()
  } catch (error) {
    console.log(`Simpsons error: ${error}`)
  }
}

/* Pages from the Simpsons */
export const changePageCharacters = async (page: number) => {
  try {
    const res = await fetch(`${SIMPSONS}?page=${page}`)

    if (!res.ok) throw new Error('Error fetching pages')

    return res.json()
  } catch (error) {
    console.log(`Simpsons error: ${error}`)
  }
}

/* Images from simpsons */
export const getCharactersImage = SIMPSONS_IMAGE