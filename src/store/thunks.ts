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
