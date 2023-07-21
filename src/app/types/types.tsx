export type OwnerType = {
  login: string;
  avatar_url: string;
  html_url: string;
};

export type ReposType = {
  name: string;
  language: string;
  fork: boolean;
  forks: number;
  forks_count: number;
  html_url: string;
  owner: OwnerType[];
  id: number;
};
export type ResponseTypes = { items: ReposType[]; total_count: number };
