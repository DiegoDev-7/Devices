/* Signals for understand the buttons of the cellPhone */
import { signals } from "./signals.config"
import Signal from "./Signal"

const SignalGroup = () => {
  return (
    <>
      {signals.map(s => (
        <Signal key={s.id} {...s} />
      ))}
    </>
  )
}

export default SignalGroup