import { createSlice } from '@reduxjs/toolkit';

function setUserDataReducer(state, { payload }) {
  if (payload.token) {
    state.user = payload.user.name;
    state.token = payload.token;
    state.isLogined = true;
  } else {
    state.user = payload.name;
    state.isLogined = true;
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, isLogined: false },
  reducers: {
    setUserData: setUserDataReducer,
    unsetUserData: state => {
      state.user = '';
      state.token = '';
      state.isLogined = false;
    },
  },
});

export const { setUserData, unsetUserData } = authSlice.actions;

export default authSlice.reducer;
