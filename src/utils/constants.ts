import { DataState } from "./types";

export const initialState: DataState = {
  issues: [],
  repo: {
    name: "",
    owner: {
      login: "",
    },
    html_url: "",
    stargazers_count: 0,
  },
  loading: false,
  error: "",
};
