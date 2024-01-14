import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialHeadlineState";
import { getNewsHeadlines } from "../apiActions/getNewsHeadlines";

export const headlinesSlice = createSlice({
  name: "headlines",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNewsHeadlines.pending, (state) => ({
        ...state,
        status: "loading",
      }))
      .addCase(getNewsHeadlines.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "succeeded";

        return state;
      })
      .addCase(getNewsHeadlines.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default headlinesSlice.reducer
