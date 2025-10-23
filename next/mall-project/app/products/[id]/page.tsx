"use client";

import { useParams } from "next/navigation";
import { useEffect, useEffectEvent, useState } from "react";
import axios from "@/app/lib/axios";
import SizeReviewList from "@/app/components/SizeReviewList";

type Product = {
    id: string;
    name: string;
    imgUrl: string;
};

export default function ProductPage() {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [sizeReviews, setSizeReviews] = useState([]);
    useEffect(() => {
        if (!id) return;

        (async () => {
            const res = await axios.get(`/products/${id}`);
            setProduct(res.data);
        })();
        (async () => {
            const res = await axios.get(`/size_reviews/?product_id=${id}`);
            setSizeReviews(res.data.results ?? []);
        })();
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.imgUrl} alt={product.name} />
            <p>Product detail page {id}</p>
            <SizeReviewList sizeReviews={sizeReviews} />
        </div>
    );
}
