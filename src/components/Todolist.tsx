import React from "react";
import { Todo } from "../models/model";
import SingleTodo from "./SingleTodo";

type TodolistProps = {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const Todolist = ({ todos, setTodos }: TodolistProps) => {
	return (
		<div className="todos">
			{todos.map((todo) => (
				<SingleTodo
					key={todo.id}
					todo={todo}
					todos={todos}
					setTodos={setTodos}
				/>
			))}
		</div>
	);
};

export default Todolist;
