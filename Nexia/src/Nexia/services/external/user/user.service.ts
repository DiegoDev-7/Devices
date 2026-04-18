import {axiosClient as axios} from "../../../../api/axios.client"



// GET
// Get user data by id
export const getUserById = async () => {

  try {

    const token = localStorage.getItem("token")

    const user = await axios.get(`/api/users/me`, {
      headers: { Authorization: `Bearer ${token}` }
    })

    return user
    
  } catch (error: any) {

    throw new Error(error.response?.data?.error || "Error obtaining user data")
    
  }

}



// POST
// Update user avatar by id
export const updateAvatar = async (formData: FormData) => {

  try {

    const token = localStorage.getItem("token")

    const updateAvatar = await axios.post("/api/users/avatar", formData, {
      headers: { Authorization: `Bearer ${token}` }
    })

    return updateAvatar.data
    
  } catch (error: any) {

    const message = 
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      error?.message ||
      "Error changing avatar"

    throw new Error(message)
    
  }

}



// POST
// Send request to reset password
export const requestReset = async (email: string) => {

  try {

    const requestReset = await axios.post("/api/users/request-reset", {
      email
    })

    return requestReset
    
  } catch (error: any) {

    throw new Error(error.response?.data?.error || "Error sending the reset code")
    
  }

}
// POST
// Verify the code received in the email
export const verifyCode = async (email: string, code: string) => {

  try {

    const verifyCode = await axios.post("/api/users/verify-code", {
      email, code
    })

    return verifyCode
    
  } catch (error: any) {

    throw new Error(error.response?.data?.error || "Error verification code")
    
  }

}
// POST
// New password
export const resetPassword = async (email: string, code: string, password: string) => {

  try {

    const verifyCode = await axios.post("/api/users/reset-password", {
      email, code, password
    })

    return verifyCode
    
  } catch (error: any) {

    throw new Error(error.response?.data?.error || "Error changing password")
    
  }

}



// PUT
// Update user by id
export const updateUserById = async (data: any) => {

  try {

    const token = localStorage.getItem("token")

    const updateUser = await axios.put("/api/users/update",
      data,  
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    )

    return updateUser
    
  } catch (error: any) {

    throw new Error(error.response?.data?.error || "Error updating user")
    
  }

}



// DELETE
// Delete account
export const deleteAccount = async () => {

  try {

    const token = localStorage.getItem("token")

    const deleteAccount = await axios.delete("/api/users/delete-account", {
      headers: { Authorization: `Bearer ${token}` }
    })

    return deleteAccount
    
  } catch (error: any) {

    throw new Error(error.response?.data?.error || "Error deleting account")
    
  }

}