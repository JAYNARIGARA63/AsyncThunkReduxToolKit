import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (
    {username, password}: {username: string; password: string},
    {rejectWithValue},
  ) => {
    console.log({username, password}, '{username, password}--');

    try {
      const response = await axios.post(
        'https://dummyjson.com/auth/login',
        {username, password},
        {withCredentials: true},
      );

      return response.data; // Response me user data aur token ho sakta hai
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Login failed');
    }
  },
);

interface initialStateTYPE {
  loading: any;
  error: any;
  user: any;
}
const authSlice = createSlice({
  name: 'auth',
  initialState: {user: null, loading: false, error: null} as initialStateTYPE,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Yahan user ki details store hongi
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Login failed';
      });
  },
});

export default authSlice.reducer;
