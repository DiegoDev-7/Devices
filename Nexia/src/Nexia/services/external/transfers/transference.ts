import {axiosClient as axios} from "../../../../api/axios.client"



// GET
// History transfers
export const getTransferHistory = async ({
  page = 1,
  limit = 10,
  type
}: {
  page?: number
  limit?: number
  type?: string
}) => {

  try {

    const token = localStorage.getItem("token")

    const history = await axios.get("/api/transaction/history", {
      params: { page, limit, type },
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return history

  } catch (error: any) {

    throw new Error(error.response?.data?.error || "Error getting history")

  }

}



// POST
// Tranfer bank to ATM
export const tranferBankToAtm = async (amount: any) => {

  try {

    const token = localStorage.getItem("token")

    const transferBank = await axios.post("/api/transaction/bank",
      { amount },
      { 
        headers: {
          Authorization: `Bearer ${token}`
        } 
      }
    )

    return transferBank

  } catch (error: any) {

    throw new Error(error.response?.data?.error || "Error sending money")
    
  }

}



// POST
// Tranfer ATM to Bank
export const tranferAtmToBank = async (amount: any) => {

  try {

    const token = localStorage.getItem("token")

    const transferAtm = await axios.post("/api/transaction/atm",
      { amount },
      { 
        headers: {
          Authorization: `Bearer ${token}`
        } 
      }
    )

    return transferAtm

  } catch (error: any) {

    throw new Error(error.response?.data?.error || "Error sending money")
    
  }

}



// POST
// Tranfer User
export const transferUser = async ({ phone, amount }: any) => {

  try {

    const token = localStorage.getItem("token")

    const transferUser = await axios.post("/api/transaction/user",
      { phone, amount },
      { 
        headers: {
          Authorization: `Bearer ${token}`
        } 
      }
    )

    return transferUser

  } catch (error: any) {

    throw new Error(error.response?.data?.error || "Error sending money")
    
  }

}