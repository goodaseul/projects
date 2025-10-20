"use client";
import { useParams } from "next/navigation";

const page = () => {
    const params = useParams();
    return <div>detail page {params.id}</div>;
};

export default page;

// **URL 파라미터(id 등)**를 읽는 건 useParams()

// 페이지 이동(push, replace, back) 같은 네비게이션은 useRouter()

// **검색 파라미터(query string)**는 useSearchParams()
