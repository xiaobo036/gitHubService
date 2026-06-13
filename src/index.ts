import { GithubService } from "./githubService.ts";
import { Repo } from "./models/Repo.ts";
import { User } from "./models/User.ts";

const Api: GithubService = new GithubService();

let user: Partial<User> = {};

const getUserInfo = async (userName: User["name"]) => {
  const res = await Api.getUser(userName);
  if (res?.status === 200) {
    const user = new User(res.data);
    const repoRes = await getRepos(user.name as string);
    user.repos = repoRes?.data.map((rep: Repo) => new Repo(repoRes?.data));
    console.log(user);
  }
};

const getRepos = async (userName: User["name"]) => {
  return await Api.getRepos(userName);
};

getUserInfo("xiaobo036");
