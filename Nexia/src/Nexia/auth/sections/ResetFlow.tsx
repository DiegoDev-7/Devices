/* Hooks */
import { useState } from "react"

/* Screens */
import { RequestResetScreen } from "../screens/request_email"
import { VerifyCodeScreen } from "../screens/verify_code"
import { ResetPasswordScreen } from "../screens/new_password"



/* Render screens */
export const ResetFlow = ({ onExit }: { onExit: () => void }) => {
  const [step, setStep] = useState(0)
  const [email, setEmail] = useState("")
  const [code, setCode] = useState("")

  if (step === 0) {
    return (
      <RequestResetScreen 
        onNext={(email) => {
          setEmail(email)
          setStep(1)
        }}
      />
    )
  }

  if (step === 1) {
    return (
      <VerifyCodeScreen 
        email={email}
        onNext={(code) => {
          setCode(code)
          setStep(2)
        }}
      />
    )
  }

  return (
    <ResetPasswordScreen 
      email={email}
      code={code}
      onFinish={onExit}
    />
  )
}