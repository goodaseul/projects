import { useEffect, useState } from "react";
import { Todo } from "../page";

interface Props {
    todos: Todo[];
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
    editTodo: (id: number, text: string) => void;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; // 이 부분 필요함!
}

export default function TodoContent({ todos, toggleTodo, removeTodo, editTodo, setTodos }: Props) {
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editText, setEditText] = useState("");

    // ✅ 페이지 처음 로드될 때 localStorage에 저장된 todos 불러오기
    useEffect(() => {
        const stored = localStorage.getItem("todos");
        if (stored) {
            setTodos(JSON.parse(stored));
        }
    }, [setTodos]);

    // ✅ todos가 바뀔 때마다 localStorage에 저장
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleEditClick = (todo: Todo) => {
        setEditingId(todo.id);
        setEditText(todo.text);
    };

    const handleSaveClick = (id: number) => {
        editTodo(id, editText);
        setEditingId(null);
    };

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && editingId !== null) {
            if (editText.trim() === "") return;
            editTodo(editingId, editText.trim());
            setEditingId(null);
        }
    };

    return (
        <ul className="mt-4 space-y-2 ">
            {todos.map((todo) => (
                <li key={todo.id} className="flex flex-wrap items-center justify-between p-3 transition-colors duration-200 rounded shadow bg-light dark:bg-dark">
                    <label className="w-[79%] flex items-center cursor-pointer" htmlFor={`todo-${todo.id}`}>
                        <input id={`todo-${todo.id}`} type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} className="hidden peer" />
                        <span
                            className={`w-5 h-5 border-2 rounded flex items-center justify-center
                                ${todo.completed ? "bg-blue-400 border-blue-400" : "border-gray-400"}`}
                        >
                            {todo.completed && (
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M5 13l4 4L19 7" />
                                </svg>
                            )}
                        </span>
                        {editingId === todo.id ? <input type="text" value={editText} onKeyDown={onKeyDown} onChange={(e) => setEditText(e.target.value)} className="flex-1 px-2 py-1 ml-2 border rounded" autoFocus /> : <span className={`ml-2 ${todo.completed ? "line-through text-gray-500 dark:text-gray-400" : ""}`}>{todo.text}</span>}
                    </label>
                    <div className="w-[21%] flex flex-wrap justify-end gap-2">
                        <button onClick={() => handleEditClick(todo)} className="p-2 text-blue-400 transition-colors duration-200 rounded shadow">
                            수정
                        </button>
                        {editingId === todo.id ? (
                            <button onClick={() => handleSaveClick(todo.id)} className="p-2 transition-colors duration-200 rounded shadow">
                                확인
                            </button>
                        ) : (
                            <button onClick={() => removeTodo(todo.id)} className="p-2 text-red-400 transition-colors duration-200 rounded shadow">
                                삭제
                            </button>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    );
}
