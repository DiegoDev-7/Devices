import {axiosClient as axios} from "../../../../api/axios.client"



// POST
// Reward by click
export async function clickReward(clicks: number) {

  try {

    const token = localStorage.getItem("token")

    const res = await axios.post("/api/game/click",
      { clicks },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    )

    return res
    
  } catch (error: any) {
    
    throw new Error(error.response?.data?.error || "No clicks were obtained")

  }

}



// POST
// Time reward
export async function timeReward() {

  try {

    const token = localStorage.getItem("token")

    const res = await axios.post("/api/game/claim",
    {},
    {
      headers: { Authorization: `Bearer ${token}` }
    })

    return res
    
  } catch (error: any) {
    
    throw new Error(error.response?.data?.error || "Error claming reward")

  }

}