/* Hooks */
import { useEffect, useState } from "react"

/* Services */
import { getUserById } from "../../../../services/external/user/user.service"



/* useUser */
export const useUser = () => {
  const [user, setUser] = useState<any>(null)

  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [error, setError] = useState(false)
  const [exitError, setExitError] = useState(false)


  // Fetch user
  const fetchUser = async () => {
    try {

      const res = await getUserById()

      setUser(res.data)

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
  useEffect(() => {
    fetchUser()
  }, [])

  return {
    user,
    error,
    errorMsg,
    exitError
  }
}