"use client";

import { useState } from "react";

import SearchBox from "./components/SearchBox";
import TodoContent from "./components/TodoContent";

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}
export default function Home() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const addTodo = (newTodo: string) => {
        setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    };
    const toggleTodo = (id: number) => {
        setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    };
    const roemoveTodo = (id: number) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };
    const editTodo = (id: number, newText: string) => {
        setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)));
    };
    return (
        <div className="flex justify-center w-screen pt-20">
            <div className="w-screen pt-10 max-w-[90%] lg:max-w-[50%] ">
                {/* input */}
                <SearchBox addTodo={addTodo} />
                {/* content */}
                <TodoContent todos={todos} toggleTodo={toggleTodo} removeTodo={roemoveTodo} editTodo={editTodo} setTodos={setTodos} />
            </div>
        </div>
    );
}
