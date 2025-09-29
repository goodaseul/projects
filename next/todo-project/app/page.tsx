"use client";

import { useState } from "react";

import Footer from "./components/Footer";
import SearchBox from "./components/SearchBox";
import TodoContent from "./components/TodoContent";

export default function Home() {
    // 앞으로 할 일
    // 1. tailwind로 꾸미기
    // 2. todo 체크 및 삭제
    // 3. 수정 시 Input
    //     - 1 수정했다면 수정한 걸로 수정
    //     - 2 수정안했다면 원래 걸로
    // 4. 캐시 저장
    const [todos, setTodos] = useState<string[]>([]);

    const addTodo = (newTodo: string) => {
        setTodos([...todos, newTodo]);
    };
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <main>
                {/* input */}
                <SearchBox addTodo={addTodo} />
                {/* content */}
                <TodoContent todos={todos} />
            </main>
            <Footer />
        </div>
    );
}
