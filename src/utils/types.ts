export interface RootState {
  data: DataState;
}

export interface DataState {
  issues: {
    open: Issue[];
    close: Issue[];
    progress: Issue[];
  };
  repo: Repo;
  url: string;
  loading: boolean;
  error: string;
}

export interface Repo {
  name: string;
  owner: Owner;
  html_url: string;
  stargazers_count: number;
}

export interface Owner {
  login: string;
  html_url: string;
}

export interface Issue {
  title: string;
  state: string;
  number: number;
  created_at: string;
  user: User;
  comments: number;
}

export interface User {
  login: string;
  html_url: string;
}
