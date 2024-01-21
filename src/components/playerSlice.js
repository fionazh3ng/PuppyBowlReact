import { createSlice } from "@reduxjs/toolkit";
import { puppyBowlApi } from "../API/puppyBowlApi";

const playerSlice = createSlice({
  name: "player",
  initialState: [],
  reducers: {
    removePlayer: (state, { payload }) => {
      return state.filter((i) => i.id !== Number(payload.id));
    },
  },
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
export const { removePlayer, addPlayer } = playerSlice.actions;
