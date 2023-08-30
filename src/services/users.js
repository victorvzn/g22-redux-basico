const url = 'https://randomuser.me/api/?results=20'

export const fetchUsers = async () => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    
    return data.results
  } catch (e) {
    console.log(e)
  }
}