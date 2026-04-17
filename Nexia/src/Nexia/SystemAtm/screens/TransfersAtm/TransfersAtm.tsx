/* Hooks */
import { useState } from "react"

/* Components */
import { UserTransferScreen } from "./components/UserTransfer";
import { BankTransferScreen } from "./components/BankTransfer";
import { OptionTransferScreen } from "./components/OptionTransfer";



/* Render panel transfers */
export const TransfersPanel = () => {
  const [screen, setScreen] = useState<"transfers" | "bankTransfer" | "userTransfer">("transfers");

  const goBack = () => setScreen("transfers");


  return (
    <div className="atm-transfers">

      {screen === "transfers" && (
        <OptionTransferScreen setScreen={setScreen} />
      )}

      {screen === "bankTransfer" && (
        <BankTransferScreen onBack={goBack} />
      )}

      {screen === "userTransfer" && (
        <UserTransferScreen onBack={goBack} />
      )}

    </div>
  )
}