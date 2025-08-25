"use client";

import { useEffect, useState } from "react";

export default function Home() {
    const [laws, setLaws] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("/api/law?query=근로기준법")
            .then((res) => res.json())
            .then((data) => {
                setLaws(data.law || []); // law 배열이 있으면 넣기
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <h1>법령 검색 결과</h1>
            {loading ? (
                <p>불러오는 중...</p>
            ) : (
                <ul>
                    {laws.map((law) => (
                        <li key={law.법령일련번호}>
                            <a href={`https://www.law.go.kr${law.법령상세링크}`} target="_blank" rel="noreferrer">
                                {law.법령명한글}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
