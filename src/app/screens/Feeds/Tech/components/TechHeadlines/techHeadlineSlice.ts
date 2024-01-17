import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialTechHeadlineState";
import { getTechHeadlines } from "../../apiActions/getTechHeadlines";


export const headlinesSlice = createSlice({
  name: "tech-headlines",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTechHeadlines.pending, (state) => ({
        ...state,
        status: "loading",
      }))
      .addCase(getTechHeadlines.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "succeeded";

        return state;
      })
      .addCase(getTechHeadlines.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default headlinesSlice.reducer
