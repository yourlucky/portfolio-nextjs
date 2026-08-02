import { MongoClient } from "mongodb";

let connectDB;

export function getDBConnection() {
  const API_KEY = process.env.MONGO_DB_KEY;
  if (!API_KEY) {
    throw new Error("MONGODB API Key cannot be found.");
  }

  if (connectDB) return connectDB;

  const url = API_KEY;
  if (process.env.NODE_ENV === "development") {
    if (!global._mongo) {
      global._mongo = new MongoClient(url).connect();
    }
    connectDB = global._mongo;
  } else {
    connectDB = new MongoClient(url).connect();
    connectDB.catch(() => {});
  }

  return connectDB;
}
