import { createSlice } from "@reduxjs/toolkit";
import { fetchIssues, fetchRepo } from "./thunks";
import { initialState } from "../utils/constants";

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateIssues: (state, action) => {
      state.issues = action.payload;
    },
  },
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
      })
      .addCase(fetchIssues.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchIssues.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.issues = payload;
        console.log(payload);
      })
      .addCase(fetchIssues.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "";
      });
  },
});

export const { updateIssues } = dataSlice.actions;

export default dataSlice.reducer;
