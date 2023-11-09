import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchCars} from "./operations";

export interface IData {
 id: string
 year: number
 make: string
 model: string
 type: string
 img: string
 description: string
 fuelConsumption: string
 engineSize: string
 accessories: string[]
 functionalities: string[]
 rentalPrice: string
 rentalCompany: string
 address: string
 rentalConditions: string
 mileage: number
}
interface CarsState {
  items: IData[];
  isLoading: boolean;
  error: string | null;
}



const cars: CarsState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state: CarsState) => {
  state.isLoading = true;
};

const handleFulfilled = (state: CarsState, action: PayloadAction<any[]>) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const handleRejected = (state: CarsState, action: PayloadAction<any>) => {
  state.isLoading = false;
  state.error = action.payload;
};

const carsSlice = createSlice({
  name: "cars",
  initialState: cars,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, handleFulfilled)
      .addCase(fetchCars.rejected, handleRejected)
  },
});

export const carsReducer = carsSlice.reducer;
