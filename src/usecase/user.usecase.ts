import { GithubService } from "../githubService.ts";
import { Repo } from "../models/Repo.ts";
import { User } from "../models/User.ts";

const Api: GithubService = new GithubService();

export const getUserInfo = async (userName: User["name"]) => {
  const res = await Api.getUser(userName);
  if (res?.status === 200) {
    const user = new User(res.data);
    const repoRes = await Api.getRepos(userName);
    user.repos = repoRes?.data.map((repo: Repo) => new Repo(repo));
    return user;
  } else if (res?.status === 403) {
    return "Rate limit exceeded";
  } else if (res?.status === 404) {
    return "User not found";
  }
};
