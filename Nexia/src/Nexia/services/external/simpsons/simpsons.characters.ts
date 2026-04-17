/* imports .env */
const SIMPSONS = import.meta.env.VITE_SIMPSONS_API
const SIMPSONS_IMAGE = import.meta.env.VITE_SIMPSONS_IMAGES_API



/* Characters from Simpsons */
export const getCharacters = async () => {
  try {

    const res = await fetch(`${SIMPSONS}/characters`)

    if (!res.ok) throw new Error(`HTTP error: ${res.status}`)

    return res.json()

  } catch (error: any) {
    
    throw new Error("Error obtaining The Simpsons characters")

  }
}



/* Pages from the Simpsons */
export const changePageCharacters = async (page: number) => {
  try {

    const res = await fetch(`${SIMPSONS}/characters?page=${page}`)

    if (!res.ok) throw new Error(`HTTP error: ${res.status}`)

    return res.json()

  } catch (error: any) {

    throw new Error("Error changing page")

  }
}



/* Images from simpsons */
export const getCharactersImage = SIMPSONS_IMAGE