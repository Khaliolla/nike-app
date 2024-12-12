import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export type Idata = {
  id: number,
  title: string,
  price: number,
  image: string,
  cat: number
}

interface Iintial {
  items: Idata[],
  status: string
}

export const fetchData = createAsyncThunk(
    'sushies/fetchSushies',
    async () => {
      const { data } = await axios.get('https://66fe8c8e2b9aac9c997c644c.mockapi.io/items')
      return data
    },
  )
  

const initialState: Iintial = {
    items: [],
    status: "loading"
}

const dataSlice = createSlice({
    name: "sushies",
    initialState,
    reducers: {
        setItems(state, action) {
          state.items = action.payload
        }
    },
    extraReducers:  (builder) => {
      builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
        state.items = [];
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success"
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = "error";
        state.items = [];
      })
  
    }
})

export const { } = dataSlice.actions
export default dataSlice.reducer