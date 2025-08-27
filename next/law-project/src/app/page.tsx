"use client";
import { LsStmdSearch } from "@/types/law";
import { useEffect, useState } from "react";
// step2 검색창 + 목록 + 클릭 시 상세보기
export default function Home() {
    const [data, setData] = useState<LsStmdSearch | null>(null);
    useEffect(() => {
        fetch("/api/law")
            .then((res) => res.json())
            .then((d) => {
                console.log("API Response:", d);
                setData(d);
            })
            .catch((err) => console.error("Fetch error:", err));
    }, []);

    return (
        <main>
            <h1>법령 데이터</h1>
            {/* 
                전체 데이터 뿌리기
                <pre>{JSON.stringify(data, null, 2)}</pre> 
            */}

            {data?.LsStmdSearch?.law?.map((item, key) => {
                console.log(data);
                return (
                    <div key={key} className="p-2 border-b cursor-pointer hover:bg-gray-50">
                        <p>{item.공포일자}</p>
                        <h2 className="font-bold">{item.법령명}</h2>
                        <p>시행일자: {item.시행일자}</p>
                        <p>공포일자: {item.공포일자}</p>
                    </div>
                );
            })}
        </main>
    );
}
