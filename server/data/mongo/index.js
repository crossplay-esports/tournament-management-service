import mongoose from "mongoose";
require("dotenv").config();

export function configure() {
  mongoose.set("strictQuery", false);
  const mongoDBURL =
    process.env.MONGO_URL || "mongodb://127.0.0.1:27015/totw-db";
  console.log(mongoDBURL);
  return mongoDBURL;
}

export async function connect() {
  const url = configure();
  await mongoose.connect(url);
}

export async function initialize() {
  try {
    await connect();
  } catch (err) {
    console.log("Error while initialzing mongo", err);
  }
}

const connection = mongoose.connection;

connection.once("open", () => console.log("Connected to mongodb successfully"));
