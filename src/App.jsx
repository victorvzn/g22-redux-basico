import { useEffect, useState } from "react"
import { fetchUsers } from "./services/users"

import { useDispatch, useSelector } from "react-redux"
import { addUser, removeUser } from "./store/users/slice"

function App() {
  const [users, setUsers] = useState([])

  const dispatch = useDispatch()
  const usersSelected = useSelector(state => state.users)

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
  }, [])

  const handleAddUser = (user) => {
    dispatch(addUser(user))
  }
  
  const handleRemoveUser = (emailId) => {
    dispatch(removeUser(emailId))
  }

  return (
    <>
      <main className='flex gap-5'>
        
        {/* {JSON.stringify(users)} */}

        <section className="bg-slate-400 flex flex-col justify-center items-center gap-4">
          <h1 className="text-3xl">User List</h1>
          {users.map(user => (
            <article key={user.email} className="py-10 bg-emerald-400 w-36 h-36 flex flex-col items-center rounded-lg text-center">
              <img src={user.picture.thumbnail} />
              {user.name.last} {user.name.first}
              <button 
                className="px-2 bg-blue-700 text-white"
                onClick={() => handleAddUser(user)}
              >
                Add
              </button>
            </article>
          ))}
        </section>

        <section className="bg-orange-400 h-screen w-64 flex flex-col items-center gap-4">
          <h1 className="text-3xl">Users Selected</h1>
          
          {/* {JSON.stringify(usersSelected)} */}

          {usersSelected.map(user => (
            <article key={user.email} className="py-10 bg-yellow-400 w-36 h-36 flex flex-col items-center rounded-lg text-center">
              <img src={user.picture.thumbnail} />
              {user.name.last} {user.name.first}
              <button 
                className="px-2 bg-red-700 text-white"
                onClick={() => handleRemoveUser(user.email)}
              >
                Remove
              </button>
            </article>
          ))}
        </section>
      </main>
    </>
  )
}

export default App
