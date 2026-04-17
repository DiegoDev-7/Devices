/* Icons */
import { ArrowUpDown } from "lucide-react";



/* Header of leaderboard */
export const HeaderLeaderboard = ({ meRank, visible, filterButton }: any) => (
  <div className="header-leaderboard">
    <p>GLOBAL RANKING SYSTEM</p>
    <span>Your top: #{meRank?.rank}</span>

    <button className={`${!visible ? "asc" : "desc"}`} onClick={filterButton}>
      <ArrowUpDown size={18} />
    </button>
  </div>
)