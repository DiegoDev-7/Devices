/* Hooks */
import { useEffect, useRef, useState } from "react"

/* Icons */
import { ArrowUpDown, Crown } from "lucide-react"

/* Services */
import { getLeaderboard, getMyRank } from "../../services/external/leaderboard/leaderboard.service"

/* Components */
import { LoadingIcon } from "../../components/loading.ldrs"



/* Render leaderboard */
type LeaderboardUser = {
  user_id: number
  name: string
  lastname: string
  avatar: string
  bank_balance?: string
  atm_balance?: string
  total_balance?: string
  total_transactions?: string | number
  total_contacts?: string | number
}

type myLeaderboard = {
  rank: string
}

export const LeaderboardPanel = () => {  
  // Get data
  const [data, setData] = useState<LeaderboardUser[]>([])
  const [meRank, setMeRank] = useState<myLeaderboard>()
  
  // Select view
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  // Configuration to the leaderboard
  const [page, setPage] = useState(0)
  const [metric, setMetric] = useState("total_balance")
  const [order, setOrder] = useState<"ASC" | "DESC">("DESC")

  const loaderRef = useRef<HTMLDivElement | null>(null)
  const [balance, setBalance] = useState(false)

  // Error message
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [error, setError] = useState(false)
  const [exitError, setExitError] = useState(false)


  // Function to get value following the selected metric
  const getMetricValue = (user: LeaderboardUser | undefined): string | number => {
    if (!user) return "-------"

    let value: string | number | undefined

    switch (metric) {
      case "total_balance":
        value = user.total_balance
        break
      case "bank_balance":
        value = user.bank_balance
        break
      case "atm_balance":
        value = user.atm_balance
        break
      case "total_transactions":
        value = user.total_transactions
        break
      case "total_contacts":
        value = user.total_contacts
        break
      default:
        value = user.total_balance
    }

    return value ?? "-------"
  }


  // Format value
  const formatValue = (value: string | number): string => {
    if (value === "-------") return value

    const num = typeof value === "string" ? Number(value) : value

    if (isNaN(num)) return String(value)

    if (["total_balance", "bank_balance", "atm_balance"].includes(metric)) {
      return `$ ${num.toLocaleString("es-CO")}`
    }

    return num.toLocaleString("es-CO")
  }


  // Fetch leaderboard
  const leaderboardLoad = async () => {
    try {
      const res = await getLeaderboard(metric, page, order)
      setData((prev) => page === 0 ? res.data : [...prev, ...res.data])

      const me = await getMyRank(metric, order)
      setMeRank(me.data)
    } catch (error: any) {
      
      const message = 
        error?.response?.data?.message || 
        error?.response?.data?.error || 
        error?.message || 
        "Error inesperado"

      setErrorMsg(message)
      setError(true)
      setExitError(false)

      setTimeout(() => setExitError(true), 2000)

      setTimeout(() => {
        setError(false)
        setErrorMsg(null)
      }, 2300)

    }
  }


  // Reset when change filter
  useEffect(() => {
    setData([])
    setPage(0)
  }, [metric, order])


  // Load data
  useEffect(() => {
    leaderboardLoad()
  }, [page, metric, order])


  // Infinite Scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((p) => p + 1)
      }
    })

    if (loaderRef.current) observer.observe(loaderRef.current)
    return () => observer.disconnect()
  }, [])


  // Filter
  const filterButton = () => {
    setVisible(prev => !prev)
    setOrder(order === "DESC" ? "ASC" : "DESC")
  }


  // Close select option outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])


  // Close select with key escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }

    document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [])


  // Alternate animation letters
  useEffect(() => {
    let timeout: any

    const loop = () => {
      setBalance(true)
      timeout = setTimeout(() => {
        setBalance(false)
        timeout = setTimeout(loop, 5000)
      }, 5000)
    }

    loop()
    return () => clearTimeout(timeout)
  }, [])


  // Top 3 and rest
  const top3 = data.slice(0, 3)
  const rest = data.slice(6)



  return (
    <div className="container-leaderboard-atm">

      <div className="header-leaderboard">
        <p>GLOBAL RANKING SYSTEM</p>
        <span>Your top: #{meRank?.rank}</span>

        <button className={`button-leaderboard-change ${!visible ? "asc" : "desc"}`} onClick={filterButton}>
          <ArrowUpDown size={18} />
        </button>
      </div>

      {/* Top leader */}
      <div className="table-leaderboard">
        <div className="header-top-leaderboard">
          {data.length !== 0 ? (
            <>
              {/* Top 2 */}
              <div className="top-leaderboard">
                {top3[1]?.avatar && <img src={top3[1].avatar} alt="User" />}
                <div className="box-title-leaderboard-top2">
                  <span className={`balance-name-leaderboard ${balance ? "in" : "out"}`}>
                    {top3[1]?.name || "-------"} {top3[1]?.lastname}
                  </span>
                  <span className={`balance-balance-leaderboard ${balance ? "out" : "in"}`}>
                    {formatValue(getMetricValue(top3[1]))}
                  </span>
                </div>
                <Crown className="icon-leaderboard-top2" color="#dcdcdc" size={22} />
              </div>

              {/* Top 1 */}
              <div className="top-leaderboard">
                {top3[0]?.avatar && <img src={top3[0].avatar} alt="User" />}
                <div className="box-title-leaderboard-top1">
                  <span className={`balance-name-leaderboard ${balance ? "in" : "out"}`}>
                    {top3[0]?.name || "-------"} {top3[0]?.lastname}
                  </span>
                  <span className={`balance-balance-leaderboard ${balance ? "out" : "in"}`}>
                    {formatValue(getMetricValue(top3[0]))}
                  </span>
                </div>
                <Crown className="icon-leaderboard-top1" color="#ffd900" size={22} />
              </div>

              {/* Top 3 */}
              <div className="top-leaderboard">
                {top3[2]?.avatar && <img src={top3[2].avatar} alt="User" />}
                <div className="box-title-leaderboard-top3">
                  <span className={`balance-name-leaderboard ${balance ? "in" : "out"}`}>
                    {top3[2]?.name || "-------"} {top3[2]?.lastname}
                  </span>
                  <span className={`balance-balance-leaderboard ${balance ? "out" : "in"}`}>
                    {formatValue(getMetricValue(top3[2]))}
                  </span>
                </div>
                <Crown className="icon-leaderboard-top3" color="#cd7f32" size={22} />
              </div>
            </>
          ) : <LoadingIcon color="white" />}
        </div>

        {/* Footer top 4 - 50 */}
        <div className="footer-bottom-leaderboard">
          <div className="title-table-leaderboard">
            <span>Rango</span>
            <span>Nombre</span>
            <span>Cantidad</span>
            <div className="divisor-leaderboard" />
          </div>

          {data.length !== 0 ? (
            <>
              {rest.map((u, i) => (
                <div key={u.user_id}>
                  <div className="title-table-leaderboard">
                    <span>{i + 4 + page * 50}</span>
                    <span>
                      {u.name} {u.lastname}
                    </span>
                    <span>
                      {formatValue(getMetricValue(u))}
                    </span>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div style={{
              height: "75%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <LoadingIcon color="white" />
            </div>
          )}
        </div>
      </div>

      {/* Select leaderboard */}
      <div className="config-leaderboard">
        <div className="container-dropdown">
          <button className="dropdown__btn" onClick={() => setOpen((p) => !p)}>
            {metric}
          </button>

          {open && (
            <div className="dropdown__menu" ref={dropdownRef}>
              <div className="item" onClick={() => { setMetric("total_balance"); setOpen(false) }}>
                Total Balance
              </div>
              <div className="item" onClick={() => { setMetric("bank_balance"); setOpen(false) }}>
                Bank Balance
              </div>
              <div className="item" onClick={() => { setMetric("atm_balance"); setOpen(false) }}>
                ATM Balance
              </div>
              <div className="item" onClick={() => { setMetric("total_transactions"); setOpen(false) }}>
                Transactions
              </div>
              <div className="item" onClick={() => { setMetric("total_contacts"); setOpen(false) }}>
                Contacts
              </div>
            </div>
          )}
        </div>
      </div>


      {/* Alert Error */}
      {error && (
        <div className={`error-update ${exitError ? "exit" : ""}`}>
          {errorMsg}
        </div>
      )}

    </div>
  )
}