import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const  BaseUrl = "http://localhost:3000"


const initialState = {
  user: null,
  loading: false,
  error: null,
};


export const signupUser = createAsyncThunk('signup', async (userData, {rejectWithValue}) => {
    try{
        const response = await axios.post(`${BaseUrl}/user/signup`, userData);
        return response.data;
      
    }
    catch (error) {
      return rejectWithValue(error.response.data.message)
    }
        
})

const  authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},


  extraReducers: (builder) => {
    builder


    .addCase(signupUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(signupUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    })
    .addCase(signupUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
  }

})

export default authSlice.reducer