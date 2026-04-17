/* Hooks */
import { useEffect, useState } from "react"

/* Components */
import { CreateBank } from "./components/CreateBank"
import { InterfaceBank } from "./components/InterfaceBank"
import { InterfaceTransfer } from "./components/Transfers"
import { InterfaceTransactions } from "./components/Transactions"

/* Services */
import { LoadingIcon } from "../../../components/loading.ldrs"



/* Render */
type options = "createBank" | "homeBank" | "transactions" | "transfer"
const BankApp = () => {
  const [page, setPage] = useState<options>("createBank")
  const [hasBank, setHasBank] = useState<boolean | null>(null)


  // Verify if has bank account
  const init = async () => {
    const stored = localStorage.getItem("bank_account")

    if (stored) {
      setHasBank(true)
      setPage("homeBank")
    } else {
      setHasBank(false)
      setPage("createBank")
    }

  }
  useEffect(() => {
    init()
  }, [])


  // Default loading
  if (hasBank === null) {
    return (
      <div style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <LoadingIcon color="black" />
      </div>
    )
  }

  // No has account
  if (!hasBank) {
    return <CreateBank
      onCreated={() => {
        setHasBank(true)
        setPage("homeBank")
      }}
    />
  }



  return (
    <>
      {page === "homeBank" && <InterfaceBank setPage={setPage} />}
      {page === "transfer" && <InterfaceTransfer />}
      {page === "transactions" && <InterfaceTransactions />}
    </>
  )
}


export default BankApp