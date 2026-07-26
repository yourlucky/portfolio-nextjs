import { MongoClient } from "mongodb";

const API_KEY = process.env.MONGO_DB_KEY;

if(!API_KEY){
  throw new Error("MONGODB API Key cannot be found.");
}

const url = API_KEY;
let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url).connect();
  // 빌드 단계에서 모듈만 로드될 때 미접속 클러스터로 인한 unhandled rejection 방지
  // (실제 사용처의 await에는 원래 에러가 그대로 전달됨)
  connectDB.catch(() => {});
}
export { connectDB };
