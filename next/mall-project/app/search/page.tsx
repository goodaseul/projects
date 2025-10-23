"use client";
import { useSearchParams } from "next/navigation";
import SearchForm from "../components/SearchForm";
import ProductList from "../components/ProductList";
import axios from "@/app/lib/axios";
import { useEffect, useState } from "react";
const Home = () => {
    const [products, setProducts] = useState([]);
    const searchParams = useSearchParams();
    const q = searchParams.get("q");

    async function getProdcuts(query: any) {
        const res = await axios.get(`/products/?q=${query}`);
        setProducts(res.data.results);
    }
    useEffect(() => {
        getProdcuts(q);
    }, [q]);
    return (
        <div>
            <h1>Search for: {q}</h1>
            <SearchForm initialValue={q} />
            <ProductList products={products} />
        </div>
    );
};

export default Home;
