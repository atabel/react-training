import React from 'react';
import Todo from './todo';

const todos = [
	'learn React',
	'learn Flux',
	'create an app',
];

const TodoList = () => (
	<ul>
		{todos.map(todoName =>
			<Todo name={todoName} />
		)}
	</ul>
);

export default TodoList;
