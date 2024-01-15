import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../initialNewsState";
import { getNewsFeeds } from "../../apiActions/getNewsFeeds";

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNewsFeeds.pending, (state) => ({
        ...state,
        status: "loading",
      }))
      .addCase(getNewsFeeds.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "succeeded";

        return state;
      })
      .addCase(getNewsFeeds.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default newsSlice.reducer
