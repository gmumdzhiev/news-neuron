import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialLocalState";
import { getLocalFeeds } from "../../apiActions/getLocalFeeds";

export const localSlice = createSlice({
  name: "local",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLocalFeeds.pending, (state) => ({
        ...state,
        status: "loading",
      }))
      .addCase(getLocalFeeds.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "succeeded";

        return state;
      })
      .addCase(getLocalFeeds.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default localSlice.reducer