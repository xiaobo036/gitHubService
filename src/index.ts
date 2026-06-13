import { GithubService } from "./githubService.ts";
import { Repo } from "./models/Repo.ts";
import { User } from "./models/User.ts";
import type { Request, Response } from "express";
import express from "express";

const app = express();

const port = 3000;

app.get("/user/:userName", (req: Request, res: Response) => {
  const userName = req.params.userName;
  if(!userName) {
    res.send("Please provide a valid username");
  }
  console.log(userName);
  const user = getUserInfo(userName as User["name"]);
  console.log(user);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

const Api: GithubService = new GithubService();

let user: Partial<User> = {};

const getUserInfo = async (userName: User["name"]) => {
  const res = await Api.getUser(userName);
  if (res?.status === 200) {
    const user = new User(res.data);
    const repoRes = await Api.getRepos(userName);
    user.repos = repoRes?.data.map((repo: Repo) => new Repo(repo));
  }
};
