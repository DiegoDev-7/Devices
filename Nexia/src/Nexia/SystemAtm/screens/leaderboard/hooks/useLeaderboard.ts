/* Hooks */
import { useEffect, useState } from "react"

/* Services */
import { getLeaderboard, getMyRank } from "../../../../services/external/leaderboard/leaderboard.service"


/* useLeaderboard */
export const useLeaderboard = (metric: string, order: "ASC" | "DESC") => {
  const [data, setData] = useState<any[]>([])
  const [page, setPage] = useState(0)
  const [meRank, setMeRank] = useState<any>()

  const load = async () => {
    const res = await getLeaderboard(metric, page, order)
    setData(prev => page === 0 ? res.data : [...prev, ...res.data])

    const me = await getMyRank(metric, order)
    setMeRank(me.data)
  }

  useEffect(() => {
    setData([])
    setPage(0)
  }, [metric, order])

  useEffect(() => {
    load()
  }, [page, metric, order])

  return { data, page, setPage, meRank }
}