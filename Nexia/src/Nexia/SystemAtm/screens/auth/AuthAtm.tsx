/* Components */
import { AuthDescription } from "./components/AuthDescription"
import { AuthError } from "./components/AuthError"
import { AuthLogo } from "./components/AuthLogo"
import { AuthPinInputs } from "./components/AuthPinInputs"
import { useAuthAtm } from "./hooks/useAuthAtm"



/* Render auth */
export const AuthAtm = ({ onSuccess, enterCard, cardNumber }: any) => {
  const {
    values,
    inputsRef,
    visible,
    error,
    exitError,
    errorMsg,
    handleChange,
    handleKeyDown,
    handlePaste
  } = useAuthAtm({ onSuccess, enterCard, cardNumber })

  return (
    <div className={`container-auth-atm ${visible ? "in" : "out"}`}>

      <AuthLogo />

      <AuthDescription />

      <AuthPinInputs
        values={values}
        inputsRef={inputsRef}
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}
        handlePaste={handlePaste}
      />

      <span className="arrow-right-auth-atm">»</span>

      <AuthError
        error={error}
        exitError={exitError}
        errorMsg={errorMsg}
      />

    </div>
  )
}