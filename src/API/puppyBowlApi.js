import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const puppyBowlApi = createApi({
  reducerPath: "puppyBowlApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT",
  }),
  endpoints: (builder) => ({
    fetchPlayers: builder.query({
      query: () => "/players",
    }),

    fetchPlayer: builder.query({
      query: (id) => "/players/" + id,
    }),

    fetchPlyerForm: builder.query({
      query: () => "/players/playerform",
    }),

    addNewPlayer: builder.mutation({
      query: (payload) => ({
        url: "/players",
        method: "POST",
        body: payload,
      }),
    }),

    deletePlayer: builder.mutation({
      query: (id) => ({
        url: "/players/" + id,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useFetchPlayersQuery,
  useFetchPlayerQuery,
  useAddNewPlayerMutation,
  useDeletePlayerMutation,
} = puppyBowlApi;
