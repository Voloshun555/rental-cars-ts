import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { carsReducer } from "./carsSlice/carsSlice";
import  favoriteSlice  from "./favoriteSlice/favoriteSlice"; 
import { filterSlice } from "./filterSlice/filterSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorite"],
};

const rootReducer = combineReducers({
  cars: carsReducer,
  favorite: favoriteSlice,
  filter: filterSlice.reducer,
});

const persistUsersReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistUsersReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;