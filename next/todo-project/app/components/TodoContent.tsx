interface ITodos {
    todos: string[];
}

const TodoContent = ({ todos }: ITodos) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </ul>
    );
};

export default TodoContent;
