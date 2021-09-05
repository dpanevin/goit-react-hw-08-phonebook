import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperation';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, isLogined: false, isFetchingCurrentUser: false },
  extraReducers: {
    [authOperations.getUser.pending]: state => {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.getUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLogined = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.getUser.rejected]: state => {
      state.isFetchingCurrentUser = false;
    },
    [authOperations.createUser.fulfilled]: (state, { payload }) => {
      state.user = payload.user.name;
      state.token = payload.token;
      state.isLogined = true;
    },
    [authOperations.loginUser.fulfilled]: (state, { payload }) => {
      state.user = payload.user.name;
      state.token = payload.token;
      state.isLogined = true;
    },
    [authOperations.logoutUser.fulfilled]: state => {
      state.user = null;
      state.token = null;
      state.isLogined = false;
    },
  },
});

export default authSlice.reducer;
