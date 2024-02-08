export interface RootState {
  data: DataState;
}

export interface DataState {
  issues: Issue[];
  repo: Repo;
  loading: boolean;
  error: string;
}

export interface Repo {
  name: string;
  owner: {
    login: string;
  };
  html_url: string;
  stargazers_count: number;
}

export interface Issue {
  title: string;
  state: string;
  number: number;
  created_at: string;
  closed_at: string;
  user: {
    login: string;
    html_url: string;
  };
  comments: number;
}
