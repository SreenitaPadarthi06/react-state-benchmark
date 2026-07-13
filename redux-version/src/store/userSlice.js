import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Guest',
    isLoggedIn: false,
  },
  reducers: {},
})

export default userSlice.reducer