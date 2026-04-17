import { axiosClient as axios } from "../../../../api/axios.client"



// GET
// Get data by bank
export const getBank = async () => {

  try {

    const token = localStorage.getItem("token")

    const responseBank = await axios.get("/api/bank",
      { 
        headers: {
          Authorization: `Bearer ${token}`
        } 
      }
    )

    return responseBank

  } catch (error: any) {

    throw new Error(error.response?.data?.error || "Error obtaining bank data")
    
  }

}



// POST
// Create a new account by bank
export const createAccountBank = async () => {

  try {

    const token = localStorage.getItem("token")

    const createBank = await axios.post("/api/bank/create/bank",
      {},
      { 
        headers: {
          Authorization: `Bearer ${token}`
        } 
      }
    )

    return createBank

  } catch (error: any) {

    throw new Error(error.response?.data?.error || "Error creating bank account")
    
  }

}



// POST
// Login account by bank
export const loginAccountBank = async (last4: string) => {

  try {

    const token = localStorage.getItem("token")

    const createBank = await axios.post("/api/bank/verify-card-code",
      { last4 },
      { 
        headers: {
          Authorization: `Bearer ${token}`
        } 
      }
    )

    return createBank.data

  } catch (error: any) {

    throw new Error(error.response?.data?.error || "Error login bank account")
    
  }

}