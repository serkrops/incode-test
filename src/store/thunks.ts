import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRepo = createAsyncThunk(
  "data/fetchRepo",
  async ({ owner, repo }: { owner: string; repo: string }) => {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/${owner}/${repo}`
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchIssues = createAsyncThunk(
  "data/fetchIssues",
  async ({ owner, repo }: { owner: string; repo: string }) => {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/${owner}/${repo}/issues?state=all&per_page=10`
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
