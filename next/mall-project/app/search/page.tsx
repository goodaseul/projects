"use client";
import { useSearchParams } from "next/navigation";
import SearchForm from "../components/SearchForm";
const Home = () => {
    const searchParams = useSearchParams();

    const q = searchParams.get("q");
    return (
        <div>
            <h1>Search for: {q}</h1>
            <SearchForm initialValue={q} />
        </div>
    );
};

export default Home;
