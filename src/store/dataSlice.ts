import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchIssues, fetchRepo } from "./thunks";
import { DataState, Issue, Repo } from "../utils/types";
import { filterAndMapIssues } from "../utils/helpers";

export const initialState: DataState = {
  issues: {
    open: [],
    close: [],
    progress: [],
  },
  repo: {
    name: "",
    owner: {
      login: "",
      html_url: "",
    },
    html_url: "",
    stargazers_count: 0,
  },
  url: "",
  loading: false,
  error: "",
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateIssues: (state, { payload }: PayloadAction<DataState["issues"]>) => {
      state.issues = payload;
    },
    addUrl: (state, { payload }: PayloadAction<string>) => {
      state.url = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepo.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchRepo.fulfilled,
        (state, { payload }: PayloadAction<Repo>) => {
          state.loading = false;
          state.repo = payload;
        }
      )
      .addCase(fetchRepo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "";
      })
      .addCase(fetchIssues.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchIssues.fulfilled,
        (state, { payload }: PayloadAction<Issue[]>) => {
          state.loading = false;
          if (sessionStorage.getItem(state.url)) {
            const preparedIssue = sessionStorage.getItem(state.url);
            const { open, close, progress } = JSON.parse(
              preparedIssue || ""
            ) as {
              open: Issue[];
              close: Issue[];
              progress: Issue[];
            };

            state.issues.open = open;
            state.issues.close = close;
            state.issues.progress = progress;
          } else {
            state.issues.open = filterAndMapIssues(payload, "open");
            state.issues.close = filterAndMapIssues(payload, "closed");
            state.issues.progress = filterAndMapIssues(payload, "progress");
          }
        }
      )
      .addCase(fetchIssues.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "";
      });
  },
});

export const { updateIssues, addUrl } = dataSlice.actions;

export default dataSlice.reducer;
