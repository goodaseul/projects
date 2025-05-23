import React from "react";

const TodoBox = () => {
    return (
        <div className="p-4 bg-blue-500 text-white font-bold text-xl">
            <input type="text" placeholder="할 일을 작성해주세요." />
            <button>작성</button>
        </div>
    );
};

export default TodoBox;
