import * as path from "path";

import express, { Request, Response } from "express";

import cors from "cors";
import { exampleRouter } from "@routes/index";
import expressWinston from "express-winston";
import winston from "winston";

if (!process.env.CLIENT_PATH) {
  throw new Error("UI path was not found.");
}

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.static(process.env.CLIENT_PATH));

app.use(
  expressWinston.logger({
    transports: [
      new winston.transports.File({
        dirname: path.join(__dirname + "/../../logs/index.html"),
      }),
      new winston.transports.Console(),
    ],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json(),
    ),
    meta: true,
    msg: "HTTP {{req.method}} {{req.url}}",
    expressFormat: true,
    colorize: false,
  }),
);

app.use(exampleRouter);

app.get("*", (_: Request, res: Response) => {
  if (!process.env.CLIENT_PATH) {
    throw new Error("UI path was not found.");
  }

  res.sendFile(path.join(process.env.CLIENT_PATH, "index.html"));
});

const port = 8080;
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
