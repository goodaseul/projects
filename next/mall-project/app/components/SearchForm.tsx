"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SearchFormProps {
    initialValue: string | null;
}

export default function SearchForm({ initialValue }: SearchFormProps) {
    const router = useRouter();
    const [value, setValue] = useState<string>(initialValue || "");

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!value) {
            router.push("/");
            return;
        } else {
            router.push(`/search/?q=${value}`);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="q" value={value} onChange={handleChange} />
            <button type="submit">검색</button>
        </form>
    );
}
