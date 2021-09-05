import { createSlice } from '@reduxjs/toolkit';
import authOperations from 'redux/Auth/authOperation';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: false,
  extraReducers: {
    [authOperations.getUser.pending]: state => (state = true),
    [authOperations.createUser.pending]: state => (state = true),
    [authOperations.loginUser.pending]: state => (state = true),
    [authOperations.logoutUser.pending]: state => (state = true),
    'contacts/executeQuery/pending': state => (state = true),
    'contacts/executeMutation/pending': state => (state = true),
    [authOperations.getUser.fulfilled]: state => (state = false),
    [authOperations.createUser.fulfilled]: state => (state = false),
    [authOperations.loginUser.fulfilled]: state => (state = false),
    [authOperations.logoutUser.fulfilled]: state => (state = false),
    'contacts/executeQuery/fulfilled': state => (state = false),
    'contacts/executeMutation/fulfilled': state => (state = false),
    [authOperations.getUser.rejected]: state => (state = false),
    [authOperations.createUser.rejected]: state => (state = false),
    [authOperations.loginUser.rejected]: state => (state = false),
    [authOperations.logoutUser.rejected]: state => (state = false),
    'contacts/executeQuery/rejected': state => (state = false),
    'contacts/executeMutation/rejected': state => (state = false),
  },
});

export default loadingSlice.reducer;
