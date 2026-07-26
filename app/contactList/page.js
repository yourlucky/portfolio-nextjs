import {connectDB} from "@/util/database.js";
import ListItem from "./ListItem";

// 빌드 시 프리렌더 금지 — 요청 시에만 DB 접속
export const dynamic = "force-dynamic";

export default async function ContactList() {
    const db = (await connectDB).db("forum");
    let result = await db.collection("contact").find().toArray();

    // ObjectId를 문자열로 변환
    result = result.map((item) => ({
        ...item,
        _id: item._id.toString(),
    }));

    return (
        <div className="list-bg">
            <ListItem result={result} />
        </div>
    );
}
