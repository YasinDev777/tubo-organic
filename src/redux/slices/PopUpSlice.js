import { createSlice } from "@reduxjs/toolkit";

const popUpSlice = createSlice({
  name: "popUp",
  initialState: {
    isOpen: false,
  },
  reducers: {

    togglePopUp: (state) => {
      state.isOpen = !state.isOpen;
    },

    openPopUp: (state) => {
      state.isOpen = true;
    },
    
    closePopUp: (state) => {
      state.isOpen = false;
    },
  },
});

export const { togglePopUp, openPopUp, closePopUp } = popUpSlice.actions;
export default popUpSlice.reducer;