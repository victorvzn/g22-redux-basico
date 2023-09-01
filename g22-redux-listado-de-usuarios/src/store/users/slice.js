import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = action.payload

      return [...state, newUser]
    },
    removeUser: (state, action) => {
      const emailId = action.payload

      return state.filter(user => user.email !== emailId)
    }
  }
})

export default usersSlice.reducer // Exportando a los reducers del slice

export const { addUser, removeUser } = usersSlice.actions