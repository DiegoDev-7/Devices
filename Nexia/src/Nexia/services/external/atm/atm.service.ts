import { axiosClient as axios } from "../../../../api/axios.client"



// GET
// Get data by atm
export const getAtm = async () => {
  
  try {

    const token = localStorage.getItem("token")

    const responseAtm = await axios.get("/api/atm",
      { 
        headers: {
          Authorization: `Bearer ${token}`
        } 
      }
    )

    return responseAtm
    
  } catch (error: any) {

    throw new Error(error.response?.data?.error || "Error obtaining atm data")
    
  }
  
}



// POST
// Create a new account by atm
export const createAccountAtm = async () => {
  
  try {

    const token = localStorage.getItem("token")

    const responseAtm = await axios.post("/api/atm/create/atm",
      {},
      { 
        headers: {
          Authorization: `Bearer ${token}`
        } 
      }
    )

    return responseAtm
    
  } catch (error: any) {

    throw new Error(error.response?.data?.error || "Error creating atm account")
    
  }
  
}