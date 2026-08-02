import {getDBConnection} from "@/util/database";

// 빌드 시 프리렌더 금지 — 요청 시에만 DB 접속 (몽고 미가동이어도 빌드는 통과)
export const dynamic = "force-dynamic";

// GET 메서드 처리
export async function GET(request) {
    const connectDB = getDBConnection();
    const db = (await connectDB).db("forum");
    const result = await db.collection("education").find().toArray();
    return Response.json({result});
}
