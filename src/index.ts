
import type { Request, Response } from "express";
import express from "express";
import type { User } from "./models/User.ts";
import { getUserInfo } from "./usecase/user.usecase.ts";

const app = express();
const port = 3000;

app.get("/user/:userName", async (req: Request, res: Response) => {
  const userName = req.params.userName;
  if (!userName) {
    res.send("Please provide a valid username");
  }
  const user = await getUserInfo(userName as User["name"]);
  res.send(user);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
