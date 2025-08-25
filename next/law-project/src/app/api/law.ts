// pages/api/law.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const query = req.query.query || "근로기준법"; // query 없으면 기본값
    const apiKey = process.env.LAW_API_KEY; // .env에 API 키 넣어주기

    const url = `https://www.law.go.kr/DRF/lawSearch.do?OC=${apiKey}&target=law&type=JSON&query=${encodeURIComponent(query as string)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: "API 호출 실패" });
    }
}
