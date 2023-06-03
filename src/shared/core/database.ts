import { connect, connection } from "mongoose";
import { MONGO_URI } from "./config";

export const connectToDB = async () => {
  await connect(MONGO_URI!!);
};

connection.on("connected", () => {
  console.log(`[mongodb]: connected to ${connection.db.databaseName}`);
});

connection.on("error", (error) => {
  console.log(`[mongodb]: error to ${error}`);
});

connection.on("disconnected", () => {
  console.log(`[mongodb]: disconnected`);
});
