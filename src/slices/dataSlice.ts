import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export type Idata = {
  id: number,
  title: string,
  price: number,
  image: string,
  image2: string,
  image3: string,
  cat: number,
  quantity: number,
}

interface Iintial {
  items: Idata[],
  status: string,
  value: string
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
    status: "loading",
    value: 'nike'
}

const dataSlice = createSlice({
    name: "sushies",
    initialState,
    reducers: {
        setItems(state, action) {
          state.items = action.payload
        },
        searchFilter(state, action) {
          state.value = action.payload
      },
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

export const { searchFilter } = dataSlice.actions
export default dataSlice.reducer