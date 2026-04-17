/* Hooks */
import { useRef, useState } from "react"
import { useLeaderboard } from "./hooks/useLeaderboard"

/* Components */
import { LoadingIcon } from "../../../components/loading.ldrs"
import { DropdownLeaderboard } from "./components/DropdownLeaderboard"
import { ErrorLeaderboard } from "./components/ErrorLeaderboard"
import { HeaderLeaderboard } from "./components/HeaderLeaderboard"
import { TableLeaderboard } from "./components/TableLeaderboard"
import { TopLeaderboard } from "./components/TopLeaderboard"



/* Render panel leaderboard */
export const LeaderboardPanel = () => {
  const [metric, setMetric] = useState("total_balance")
  const [order, setOrder] = useState<"ASC" | "DESC">("DESC")
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const [balance, setBalance] = useState(false)

  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const { data, page, setPage, meRank } = useLeaderboard(metric, order)

  const top3 = data.slice(0, 3)
  const rest = data.slice(6)

  const filterButton = () => {
    setVisible(prev => !prev)
    setOrder(order === "DESC" ? "ASC" : "DESC")
  }



  return (
    <div className="container-leaderboard-atm">

      <HeaderLeaderboard
        meRank={meRank}
        visible={visible}
        filterButton={filterButton}
      />

      <div className="table-leaderboard">
        <div className="header-top-leaderboard">
          {data.length !== 0
            ? <TopLeaderboard top3={top3} balance={balance} metric={metric} />
            : <LoadingIcon color="white" />}
        </div>

        <TableLeaderboard
          data={data}
          rest={rest}
          page={page}
          metric={metric}
        />
      </div>

      <DropdownLeaderboard
        open={open}
        setOpen={setOpen}
        setMetric={setMetric}
        dropdownRef={dropdownRef}
        metric={metric}
      />

      <ErrorLeaderboard />

    </div>
  )
}