import { createSlice } from "@reduxjs/toolkit";
import { fetchRepo } from "./thunks";
import { initialState } from "../utils/constants";

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRepo.fulfilled, (state, action) => {
        state.loading = false;
        state.repo = action.payload;
      })
      .addCase(fetchRepo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "";
      });
  },
});

export default dataSlice.reducer;
