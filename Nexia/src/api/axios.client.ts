import axios from "axios"


export const axiosClient = axios.create({
  baseURL: "https://backend-devices-qbsn.onrender.com"
})