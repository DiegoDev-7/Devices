/* Components */
import { LoadingIcon } from "../../../../components/loading.ldrs";

/* Utils */
import { formatValue, getMetricValue } from "../utils/leaderboard.utils";



/* Table leaderboard */
export const TableLeaderboard = ({ data, rest, page, metric }: any) => (
  <div className="footer-bottom-leaderboard">
    <div className="title-table-leaderboard">
      <span>Rango</span>
      <span>Nombre</span>
      <span>Cantidad</span>
      <div className="divisor-leaderboard" />
    </div>

    {data.length !== 0 ? (
      rest.map((u: any, i: number) => (
        <div key={u.user_id}>
          <div className="title-table-leaderboard">
            <span>{i + 4 + page * 50}</span>
            <span>{u.name} {u.lastname}</span>
            <span>{formatValue(getMetricValue(u, metric), metric)}</span>
          </div>
        </div>
      ))
    ) : (
      <div style={{ height: "75%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <LoadingIcon color="white" />
      </div>
    )}
  </div>
)