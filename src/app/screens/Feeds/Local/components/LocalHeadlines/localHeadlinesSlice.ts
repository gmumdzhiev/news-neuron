import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialLocalHeadlineState";
import { getLocalHeadlines } from "../../apiActions/getLocalHeadlines";


export const localHeadlinesSlice = createSlice({
  name: "local-headlines",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLocalHeadlines.pending, (state) => ({
        ...state,
        status: "loading",
      }))
      .addCase(getLocalHeadlines.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "succeeded";

        return state;
      })
      .addCase(getLocalHeadlines.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default localHeadlinesSlice.reducer
