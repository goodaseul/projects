"use client";

import { useState } from "react";

import Footer from "./components/Footer";
import SearchBox from "./components/SearchBox";
import TodoContent from "./components/TodoContent";

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}
export default function Home() {
    // 앞으로 할 일
    // 1. 다크모드
    // 2. 수정 시 Input
    //     - 1 수정했다면 수정한 걸로 수정
    //     - 2 수정안했다면 원래 걸로
    // 3. 삭제
    // 4. 캐시 저장

    const [todos, setTodos] = useState<Todo[]>([]);
    const addTodo = (newTodo: string) => {
        setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    };
    const toggleTodo = (id: number) => {
        setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    };
    return (
        <div className="items-center min-h-screen justify-items-center ">
            <main className="w-screen h-screen pt-20 max-w-[90%] lg:max-w-[50%]">
                <h1 className="text-6xl">To-do project.</h1>
                {/* input */}
                <SearchBox addTodo={addTodo} />
                {/* content */}
                <TodoContent todos={todos} toggleTodo={toggleTodo} />
            </main>
            <Footer />
        </div>
    );
}
