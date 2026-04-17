/* Metrics to select in the leaderboard */
export const getMetricValue = (user: any, metric: string) => {
  if (!user) return "-------"

  switch (metric) {
    case "total_balance": return user.total_balance
    case "bank_balance": return user.bank_balance
    case "atm_balance": return user.atm_balance
    case "total_transactions": return user.total_transactions
    case "total_contacts": return user.total_contacts
    default: return user.total_balance
  }
}


/* Values in leaderboard (Numbers)  */
export const formatValue = (value: any, metric: string) => {
  if (value === "-------") return value

  const num = typeof value === "string" ? Number(value) : value
  if (isNaN(num)) return String(value)

  if (["total_balance", "bank_balance", "atm_balance"].includes(metric)) {
    return `$ ${num.toLocaleString("es-CO")}`
  }

  return num.toLocaleString("es-CO")
}