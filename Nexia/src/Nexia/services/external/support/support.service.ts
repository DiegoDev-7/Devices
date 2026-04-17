import { axiosClient as axios } from "../../../../api/axios.client"



/* Get contacts */
export async function sendSupport(name: string, email: string, message: string) {
  try {
    
    const res = await axios.post("/api/support", {
      name, email, message
    })

    return res
    
  } catch (error: any) {

    throw new Error(error.response?.data?.error || "Error getting contacts")

  }
}