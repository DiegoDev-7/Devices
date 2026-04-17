import {axiosClient as axios} from "../../../../api/axios.client"



// GET
// Get radio Colombia
export const getRadioColombia = async () => {
  try {

    const user = await axios.get(`/api/radio/colombia`)
    
    return user

  } catch (error: any) {
    
    throw new Error(error.response?.data?.error || "Error registering user")
    
  }
}



// GET
// Get radio United States
export const getRadioEEUU = async () => {
  try {

    const user = await axios.get(`/api/radio/eeuu`)
    
    return user

  } catch (error: any) {
    
    throw new Error(error.response?.data?.error || "Error registering user")
    
  }
}



// GET
// Get radio Japan
export const getRadioJapan = async () => {
  try {

    const user = await axios.get(`/api/radio/japan`)
    
    return user

  } catch (error: any) {
    
    throw new Error(error.response?.data?.error || "Error registering user")
    
  }
}