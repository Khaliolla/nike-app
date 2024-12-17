import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createAsyncThunk } from "@reduxjs/toolkit";

interface User {
    email: string,
    token: string,
    id: string,
    isLoading?: boolean;
}

const initialState: User = {
    email: '',
    token: '',
    id: '',
    isLoading: false
}

export const loadUserFromStorage = createAsyncThunk(
    'user/loadUserFromStorage',
    async () => {
      const email = await AsyncStorage.getItem('email');
      const token = await AsyncStorage.getItem('token');
      const id = await AsyncStorage.getItem('userId');
      return {
        email: email || '',
        token: token || '',
        id: id || '',
      };
    }
  );

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.email = action.payload.email
            state.token = action.payload.token
            state.id = action.payload.id
            AsyncStorage.setItem('email', action.payload.email )
            AsyncStorage.setItem('token', action.payload.token)
            AsyncStorage.setItem('userId', action.payload.id)
        },
        
        removeUSer(state) {
            state.email = ''
            state.token = ''
            state.id = ''

            AsyncStorage.setItem('email', '')
            AsyncStorage.setItem('token', '')
            AsyncStorage.setItem('userId', '')
        }
    },

    extraReducers: (builder) => {
      builder.addCase(loadUserFromStorage.pending, (state) => {
        state.isLoading = true
      });
        builder.addCase(loadUserFromStorage.fulfilled, (state, action) => {
          state.email = action.payload.email;
          state.token = action.payload.token;
          state.id = action.payload.id;
          state.isLoading = false
        });
        builder.addCase(loadUserFromStorage.rejected, (state) => {
          state.email = "";
          state.token = "";
          state.id = "";
          state.isLoading = false
        });

    }
})

export const {setUser, removeUSer} = userSlice.actions
export default userSlice.reducer