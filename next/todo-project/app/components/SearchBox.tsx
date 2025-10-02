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
        <div className="flex flex-wrap justify-between w-full mt-10">
            <input className="w-[80%] transition-all duration-150 ease-in-out border-b-2 focus-visible:outline-none p-3 text-lg focus:text-xl" name="todoname" type="text" value={inputValue} onChange={onChange} onKeyDown={onKeyDown} placeholder="Please Write your To-do list" />
            <button className="p-3 pl-0 pr-0 w-[15%] rounded-sm shadow-xl transition-all duration-150 ease-in-out  bg-[rgba(255,255,255,0.8)] text-black hover:bg-white" type="button" onClick={onClick}>
                클릭
            </button>
        </div>
    );
};

export default SearchBox;
