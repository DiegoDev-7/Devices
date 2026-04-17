/* Icons */
import { ArrowLeft } from "lucide-react"



/* Render back button */
type PropsBack = {
  onBack?: () => void;
}
export const BackButton = ({ onBack }: PropsBack) => {
  return (
    <button className="atm-back-button" onClick={onBack}>
      <ArrowLeft size={18} />
      Atrás
    </button>
  )
}