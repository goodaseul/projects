import TodoBox from "./Components/TodoBox";

function App() {
    return (
        <>
            <h1 className="text-3xl font-bold text-blue-600">ToDo Project</h1>
            <div className="p-4 text-black bg-yellow-200 rounded">Tailwind가 적용되고 있나요?</div>
            <h1>ToDo Project</h1>
            <TodoBox />
        </>
    );
}

export default App;
