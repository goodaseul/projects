import { Todo } from "../page";

interface Props {
    todos: Todo[];
    toggleTodo: (id: number) => void;
}

export default function TodoContent({ todos, toggleTodo }: Props) {
    return (
        <ul className="mt-4 space-y-2">
            {todos.map((todo) => (
                <li className="flex flex-wrap items-center justify-between">
                    <label key={todo.id} className="w-[79%] flex items-center cursor-pointer" htmlFor={`todo-${todo.id}`}>
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
                        <span className={`ml-2 ${todo.completed ? "line-through text-gray-500" : ""}`}>{todo.text}</span>
                    </label>
                    <div className="w-[21%] flex flex-wrap justify-end">
                        <button className="p-3 pt-2 pb-2 text-blue-400 transition-all duration-150 ease-in-out bg-white rounded-sm shadow-xl">수정</button>
                        <button className="p-3 pt-2 pb-2 ml-3 text-red-300 transition-all duration-150 ease-in-out bg-white rounded-sm shadow-xl">삭제</button>
                    </div>
                </li>
            ))}
        </ul>
    );
}
