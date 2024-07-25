import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: RegisterState = {
  isVisible: false
}

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setRegisterVisibility: (state, action: PayloadAction<boolean>) => {
      // Define a visibilidade do componente de cadastro
      state.isVisible = action.payload
    }
  }
})

export const { setRegisterVisibility } = registerSlice.actions

export default registerSlice.reducer
