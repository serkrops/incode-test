import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchApiData } from "../utils/helpers";

export const fetchRepo = createAsyncThunk(
  "data/fetchRepo",
  async ({ owner, repo }: { owner: string; repo: string }) => {
    const url = `https://api.github.com/repos/${owner}/${repo}`;
    return fetchApiData(url);
  }
);

export const fetchIssues = createAsyncThunk(
  "data/fetchIssues",
  async ({ owner, repo }: { owner: string; repo: string }) => {
    const url = `https://api.github.com/repos/${owner}/${repo}/issues?state=all&per_page=20`;
    return fetchApiData(url);
  }
);
