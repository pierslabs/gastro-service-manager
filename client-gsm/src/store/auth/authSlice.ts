import { createSlice } from '@reduxjs/toolkit'
import { IAuthState } from '../../interfaces/authState';

const initialState:IAuthState = {
  status: 'not-authenticated',
  user:{},
  errorMessage: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
     onCheckingAuth: (state: IAuthState)=>{
      state.status = 'checking';
      state.user = {};
      state.errorMessage = null;
     }
  }
});


// Action creators are generated for each case reducer function
export const { onCheckingAuth } = authSlice.actions;
