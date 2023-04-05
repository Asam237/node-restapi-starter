import express from "express";
import { Routes } from "./src/routes";
import * as http from "http";
import { PORT } from "./src/core/config";
import { connectToDb } from "./src/core/connect/db";

const app = express();
Routes.init(app);
const server: http.Server = http.createServer(app);

const main = () => {
  try {
    server.listen(PORT, async () => {
      await connectToDb();
      console.log(`[Server]: running on ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main();
