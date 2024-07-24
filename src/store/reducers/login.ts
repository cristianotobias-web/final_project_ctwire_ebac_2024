import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: LoginState = {
  isVisible: false
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginVisibility: (state, action: PayloadAction<boolean>) => {
      // Define a visibilidade do componente de login
      state.isVisible = action.payload
    }
  }
})

export const { setLoginVisibility } = loginSlice.actions

export default loginSlice.reducer
