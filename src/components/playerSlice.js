import { createSlice } from "@reduxjs/toolkit";
import { puppyBowlApi } from "../API/puppyBowlApi";

const playerSlice = createSlice({
  name: "player",
  initialState: [],
  extraReducers: (builder) => {
    builder.addMatcher(
      puppyBowlApi.endpoints.fetchPlayers.matchFulfilled,
      (state, { payload }) => {
        return payload.data.players;
      }
    );
  },
});

export default playerSlice.reducer;
