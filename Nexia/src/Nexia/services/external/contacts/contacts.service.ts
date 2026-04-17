import { axiosClient as axios } from "../../../../api/axios.client"



/* Get contacts */
export async function getContacts(search?: string) {
  try {
    
    const token = localStorage.getItem("token")

    const res = await axios.get("/api/contact", {
      params: search ? { search } : {},
      headers: { Authorization: `Bearer ${token}` }
    })

    return res
    
  } catch (error: any) {

    throw new Error(error.response?.data?.error || "Error getting contacts")

  }
}



/* Create contact */
export async function createContact(phone: string, name_contact: string) {
  try {
    
    const token = localStorage.getItem("token")

    const res = await axios.post("/api/contact",
      { phone, name_contact },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    )

    return res
    
  } catch (error: any) {

    throw new Error(error.response?.data?.error || "Error creating contact")

  }
}



/* Update contact */
export async function updateContact(contact_id: number, name_contact: string) {
  try {
    
    const token = localStorage.getItem("token")

    const res = await axios.patch(
      `/api/contacts/${contact_id}`,
      { name_contact },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    )

    return res
    
  } catch (error: any) {

    throw new Error(error.response?.data?.error || "Error updating contact")

  }
}



/* Update contact */
export async function deleteContact(contact_id: number) {
  try {

    const token = localStorage.getItem("token")

    const res = await axios.delete(`/api/contacts/${contact_id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })

    return res

  } catch (error: any) {

    throw new Error(error.response?.data?.error || "Error deleting contact")

  }
}