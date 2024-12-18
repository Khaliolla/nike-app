import { createSlice } from "@reduxjs/toolkit";
import { Idata } from "./dataSlice";

interface Iitems {
    items: Idata[],
    value: string
}

const initialState: Iitems = {
    items: [],
    value: "",
}

const bagSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        setItems(state, action) {
            const itemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
              );
            
              if (itemIndex >= 0) {
                state.items[itemIndex].quantity += 1;
              } else {
                const newItem = { ...action.payload, quantity: 1 };
                state.items.push(newItem);
              }
        },
        decrementItems(state, action) {
            const itemIndex = state.items.findIndex(item => item.id === action.payload);

                if (itemIndex !== -1) {
                    if (state.items[itemIndex].quantity > 1) {
                        state.items[itemIndex].quantity -= 1; 
                    } else {
                        state.items.splice(itemIndex, 1); 
                    }
                }
        },
        incrementItems(state, action) {
            const itemIndex = state.items.findIndex(item => item.id === action.payload);

                if (itemIndex !== -1) {
                    if (state.items[itemIndex].quantity >= 1) {
                        state.items[itemIndex].quantity += 1; 
                    } else {
                        state.items.splice(itemIndex, 1); 
                    }
                }
        },

        removeItems(state, action) {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },

    },
})



export const { setItems, decrementItems, incrementItems, removeItems} = bagSlice.actions
export default bagSlice.reducer