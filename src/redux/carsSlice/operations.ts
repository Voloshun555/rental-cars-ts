import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://649986d079fbe9bcf83f6d9e.mockapi.io";

export const fetchCars = createAsyncThunk(
  "Rent-car/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/Rent-car");
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
