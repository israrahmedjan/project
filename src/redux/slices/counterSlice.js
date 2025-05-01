import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  giftitem:0,
  value: 1,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    giftItemLoad: (state,action) => {
      //let price = state.value*state.gitItem
      state.giftitem =  action.payload;
    },
    incrementByAmount: (state, action) => {
      //state.gitItem += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount,giftItemLoad } = counterSlice.actions;
export default counterSlice.reducer;
