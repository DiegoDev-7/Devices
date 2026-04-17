/* Icons */
import { Crown } from "lucide-react";

/* Utils */
import { formatValue, getMetricValue } from "../utils/leaderboard.utils";


/* Top three leaderboard */
export const TopLeaderboard = ({ top3, balance, metric }: any) => (
  <>
    {[1, 0, 2].map((pos, idx) => (
      <div className="top-leaderboard" key={idx}>
        {top3[pos]?.avatar && <img src={top3[pos].avatar} alt="User" />}

        <div className={`box-title-leaderboard-top${pos === 0 ? 1 : pos === 1 ? 2 : 3}`}>
          <span className={`balance-name-leaderboard ${balance ? "in" : "out"}`}>
            {top3[pos]?.name || "-------"} {top3[pos]?.lastname}
          </span>

          <span className={`balance-balance-leaderboard ${balance ? "out" : "in"}`}>
            {formatValue(getMetricValue(top3[pos], metric), metric)}
          </span>
        </div>

        <Crown
          className={`icon-leaderboard-top${pos === 0 ? 1 : pos === 1 ? 2 : 3}`}
          color={pos === 0 ? "#ffd900" : pos === 1 ? "#dcdcdc" : "#cd7f32"}
          size={22}
        />
      </div>
    ))}
  </>
)