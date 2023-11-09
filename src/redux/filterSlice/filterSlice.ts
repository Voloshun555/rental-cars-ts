import { createSlice } from "@reduxjs/toolkit";

 export const filterSlice = createSlice({
   name: "filter",
   initialState: {
     selectedModel: "",
     selectedPrice: "",
     minMileage: "",
     maxMileage: "",
   },

   reducers: {
     setFilters: (state, action) => {
       state.selectedModel = action.payload.selectedModel;
       state.selectedPrice = action.payload.selectedPrice;
       state.minMileage = action.payload.minMileage;
       state.maxMileage = action.payload.maxMileage;
     },
   },
 });

export const { setFilters } = filterSlice.actions

