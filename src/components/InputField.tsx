import React, { useRef } from "react";
import "./style.css";

type InputFieldProps = {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleAdd: (e: React.FormEvent) => void;
};

const InputField = ({ todo, setTodo, handleAdd }: InputFieldProps) => {
	const inputRef = useRef<HTMLInputElement>(null);
	return (
		<form
			className="input"
			onSubmit={(e) => {
				handleAdd(e);
				inputRef.current?.blur();
			}}
		>
			<input
				ref={inputRef}
				type="text"
				placeholder="Enter todo"
				className="todo-input"
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
			/>
			<button className="todo-submit" type="submit">
				GO
			</button>
		</form>
	);
};

export default InputField;
