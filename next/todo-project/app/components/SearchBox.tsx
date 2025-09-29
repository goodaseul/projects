import { useState } from "react";

interface IAddtodo {
    addTodo: (todo: string) => void;
}

const SearchBox = ({ addTodo }: IAddtodo) => {
    const [inputValue, setInputValue] = useState("");
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
    const onClick = () => {
        addTodo(inputValue);
        setInputValue("");
    };
    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            addTodo(inputValue);
            setInputValue("");
        }
    };
    return (
        <div>
            <input type="text" value={inputValue} onChange={onChange} onKeyDown={onKeyDown} placeholder="Please Write your To-do list" />
            <button type="button" onClick={onClick}>
                클릭
            </button>
        </div>
    );
};

export default SearchBox;
