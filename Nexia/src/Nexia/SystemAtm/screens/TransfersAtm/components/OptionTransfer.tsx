/* Icons */
import { Banknote, User } from "lucide-react"



/* Select option of transfer */
export const OptionTransferScreen = ({ setScreen }: any) => {
  return (
    <>
      <div className="atm-transfer-card bank" onClick={() => setScreen("bankTransfer")}>
        <div className="icon">
          <Banknote size={28} />
        </div>

        <div className="content">
          <h3>Transferencia bancaria</h3>
          <p>Envía dinero a cuentas externas</p>
        </div>
      </div>

      <div className="atm-transfer-card user" onClick={() => setScreen("userTransfer")}>
        <div className="icon">
          <User size={28} />
        </div>

        <div className="content">
          <h3>Transferencia a usuario</h3>
          <p>Envíos inmediatos dentro del sistema</p>
        </div>
      </div>
    </>
  )
}