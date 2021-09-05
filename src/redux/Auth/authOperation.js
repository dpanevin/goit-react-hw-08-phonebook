import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.authorization = '';
  },
};

const getUser = createAsyncThunk('auth/current', async (_, { getState }) => {
  try {
    const currentToken = getState().auth.token;
    token.set(currentToken);
    const { data } = await axios('users/current');
    return data.name;
  } catch (error) {
    getUser.rejectedWithValue(error.message);
  }
});

const createUser = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    createUser.rejectedWithValue(error.message);
  }
});

const loginUser = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    loginUser.rejectedWithValue(error.message);
  }
});

const logoutUser = createAsyncThunk('auth/logout', async () => {
  try {
    axios.post('users/logout');
    token.unset();
    return;
  } catch (error) {
    logoutUser.rejectedWithValue(error.message);
  }
});

const authOperations = {
  getUser,
  createUser,
  loginUser,
  logoutUser,
};

export default authOperations;
