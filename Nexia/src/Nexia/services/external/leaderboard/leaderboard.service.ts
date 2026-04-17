import { axiosClient as axios } from "../../../../api/axios.client"



/* Get leaderboard */
export async function getLeaderboard(
  metric: string,
  page: number,
  order: "ASC" | "DESC" = "DESC"
) {
  try {

    const token = localStorage.getItem("token")

    const res = await axios.get("/api/leaderboard", {
      params: { metric, page, order },
      headers: { Authorization: `Bearer ${token}` }
    })

    return res

  } catch (error: any) {
    
    throw new Error(error.response?.data?.error || "Error loading leaderboard")

  }
}



/* Get rank by user */
export async function getMyRank(metric: string, order: "ASC" | "DESC" = "DESC") {
  try {

    const token = localStorage.getItem("token")

    const res = await axios.get("/api/leaderboard/me/rank", {
      params: { metric, order },
      headers: { Authorization: `Bearer ${token}` }
    })

    return res

  } catch (error: any) {

    throw new Error(error.response?.data?.error || "Error getting rank")

  }
}



/* Get leaderboard with context */
export async function getMyLeaderboardContext(metric: string) {
  try {

    const token = localStorage.getItem("token")

    const res = await axios.get("/api/leaderboard/me/context", {
      params: { metric },
      headers: { Authorization: `Bearer ${token}` }
    })

    return res

  } catch (error: any) {

    throw new Error(error.response?.data?.error || "Error getting context")

  }
}