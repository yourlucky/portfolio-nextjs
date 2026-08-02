import {getDBConnection} from "@/util/database";

export default async function handler(request, response) {
    if (request.method == "GET") {
        const connectDB = getDBConnection();
        const db = (await connectDB).db("forum");
        let result = await db.collection("post").find().toArray();
        return response.status(200).json(result);
    }
    if (request.method == "POST") {
        return response.status(200).json("completed");
    }
}
