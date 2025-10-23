"use client";
import SearchForm from "./components/SearchForm";
import ProductList from "./components/ProductList";
import { useEffect, useState } from "react";
import axios from "@/app/lib/axios";

export default function Home() {
    const [products, setProdcuts] = useState([]);
    async function getProducts() {
        const res = await axios.get("/products");
        setProdcuts(res.data.results);
    }
    useEffect(() => {
        getProducts();
    }, []);
    return (
        <div>
            <h1>Codeitmall</h1>
            <SearchForm initialValue={null} />
            <ProductList products={products} />
        </div>
    );
}
