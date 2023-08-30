import { useEffect, useState } from "react"
import { fetchUsers } from "./services/users"

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
  }, [])

  return (
    <>
      <main className=''>
        <h1 className="text-3xl">User List</h1>
        
        {JSON.stringify(users)}
      </main>
    </>
  )
}

export default App
