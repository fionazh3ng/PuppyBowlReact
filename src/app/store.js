import { configureStore } from "@reduxjs/toolkit";
import { puppyBowlApi } from "../API/puppyBowlApi";
import playerSlice from "../components/playerSlice";

export const store = configureStore({
  reducer: {
    [puppyBowlApi.reducerPath]: puppyBowlApi.reducer,
    players: playerSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(puppyBowlApi.middleware),
});
