import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialTechState";
import { getTechFeeds } from "../../apiActions/getTechFeeds";

export const techSlice = createSlice({
  name: "tech",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTechFeeds.pending, (state) => ({
        ...state,
        status: "loading",
      }))
      .addCase(getTechFeeds.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "succeeded";

        return state;
      })
      .addCase(getTechFeeds.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default techSlice.reducer
