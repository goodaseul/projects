import { NextResponse } from "next/server";

export async function GET() {
    const oc = process.env.LAW_API_KEY;
    try {
        const res = await fetch(`https://www.law.go.kr/DRF/lawSearch.do?OC=${oc}&target=lsStmd&type=JSON`);

        if (!res.ok) {
            return NextResponse.json({ error: `Failed to fetch: ${res.status}` }, { status: res.status });
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: String(error) }, { status: 500 });
    }
}
