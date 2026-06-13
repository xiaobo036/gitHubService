import { Repo } from "./Repo.ts";
export class User {
  name: string;
  url: string;
  bio: string;
  avatar_url: string;
  location: string;
  repos: Repo[] = [];

  constructor(o: Partial<User> = {}) {
    ((this.name = o?.name || ""),
      (this.url = o?.url || ""),
      (this.bio = o?.bio || ""),
      (this.avatar_url = o?.avatar_url || ""),
      (this.location = o?.location || ""));
  }
}
