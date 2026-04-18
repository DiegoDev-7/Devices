import {axiosClient as axios} from "../../../../api/axios.client"



// POST
// Register user
export const registerEmail = async (
  name: string,
  lastName: string,
  email: string,
  password: string
) => {

  try {

    const { data } = await axios.post("/api/auth/register", {
      name,
      lastName,
      email,
      password
    })
  
    return data
    
  } catch (error: any) {
    
    throw new Error(error.response?.data?.error || "Error registering user")
    
  }

}



// POST
// Login user by email and password
interface LoginResponse {
  token: string
  user?: any
}
export const loginEmail = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  try {

    const { data } = await axios.post("/api/auth/login", {
      email,
      password
    })

    return data
    
  } catch (error: any) {
    
    throw new Error(error.response?.data?.error || "Error login")

  }

}



// POST
// Register user by google
export const registerGoogle = async (
  name: string,
  lastName: string,
  email: string,
  provider_id: string,
  avatar?: string
) => {

  try {

    const { data } = await axios.post("/api/auth/google/register", {
      name,
      lastName,
      email,
      provider_id,
      avatar
    })
  
    return data
    
  } catch (error: any) {

    throw new Error(error.response?.data?.error || "Error registering user by google")
    
  }

}



// POST
// Login user by google
export const loginGoogle = async (
  name: string,
  email: string,
  provider_id: string,
  avatar?: string
) => {

  try {

    const { data } = await axios.post("/api/auth/google/login", {
      name,
      email,
      provider_id,
      avatar
    })
  
    return data
    
  } catch (error: any) {

    throw new Error(error.response?.data?.error || "Error login by google")
    
  }

}



// DELETE
// Delete user by google
export const deleteGoogle = async () => {

  try {

    const token = localStorage.getItem("token")
  
    const { data } = await axios.delete("/api/auth/google/delete-account", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  
    return data
    
  } catch (error: any) {

    throw new Error(error.response?.data?.error || "Error deleting account by google");
    
    
  }

}