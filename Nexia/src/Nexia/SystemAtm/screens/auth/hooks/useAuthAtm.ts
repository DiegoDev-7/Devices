/* Hooks */
import { useEffect, useRef, useState } from "react"

/* Services */
import { loginAccountBank } from "../../../../services/external/bank/bank.service"



/* useAuthAtm */
export const useAuthAtm = ({ onSuccess, enterCard, cardNumber }: any) => {
  const [values, setValues] = useState(["", "", "", ""])
  const inputsRef = useRef<(HTMLInputElement | null)[]>([])
  const [visible, setVisible] = useState(false)
  const [used, setUsed] = useState(false)

  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [error, setError] = useState(false)
  const [exitError, setExitError] = useState(false)

  const handleError = (error: any) => {
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

  const auth = async (code: string) => {
    try {
      await loginAccountBank(code)

      setVisible(false)

      setTimeout(() => {
        onSuccess()
      }, 1000)
    } catch (error: any) {
      resetInputs()
      handleError(error)
    }
  }

  // Card auth
  useEffect(() => {
    if (enterCard && cardNumber && !used) {
      setUsed(true)
      auth(cardNumber.slice(-4))
    }
  }, [enterCard, cardNumber])

  // Manual auth
  useEffect(() => {
    if (values.every(v => v !== "")) {
      auth(values.join(""))
    }
  }, [values])

  // Animation
  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 500)
    return () => clearTimeout(id)
  }, [])

  const resetInputs = () => {
    setValues(["", "", "", ""])
    inputsRef.current[0]?.focus()
  }

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return

    const newValues = [...values]
    newValues[index] = value
    setValues(newValues)

    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace") {
      if (values[index]) {
        const newValues = [...values]
        newValues[index] = ""
        setValues(newValues)
      } else if (index > 0) {
        inputsRef.current[index - 1]?.focus()
      }
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    const paste = e.clipboardData.getData("text").slice(0, 4)
    if (!/^\d+$/.test(paste)) return

    const newValues = paste.split("").slice(0, 4)
    setValues([...newValues, "", "", "", ""].slice(0, 4))

    inputsRef.current[3]?.focus()
  }

  return {
    values,
    inputsRef,
    visible,
    error,
    exitError,
    errorMsg,
    handleChange,
    handleKeyDown,
    handlePaste
  }
}