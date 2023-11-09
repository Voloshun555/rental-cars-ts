
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoriteState {
  favoriteList: string[];
}

const initialState: FavoriteState = {
  favoriteList: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<{ id: string }>) => {
      state.favoriteList.push(action.payload.id);
    },
    removeFavorite: (state, action: PayloadAction<{ id: string }>) => {
      state.favoriteList = state.favoriteList.filter(item => item !== action.payload.id);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;