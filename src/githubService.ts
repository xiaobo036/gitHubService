import type { User } from "./models/User.ts";
import axiosInstance from "./utils/request.ts";

export class GithubService {
  async getUser(userName: User["name"]) {
    return await axiosInstance({
      method: "GET",
      url: `users/${userName}`,
    });
  }

  async getRepos(userName: User["name"]) {
    return await axiosInstance({
      method: "GET",
      url: `users/${userName}/repos`,
    });
  }
}
