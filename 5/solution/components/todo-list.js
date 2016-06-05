import React from 'react';
import Todo from './todo';

const listStyle = {
	flex: 1,
	background: '#eee',
	overflow: 'auto',
};

const TodoList = ({todos, onClickTodo}) => (
	<ul style={listStyle}>
		{todos.map(todo =>
			<Todo key={todo.id} {...todo} onClick={() => onClickTodo(todo.id)} />
		)}
	</ul>
);

export default TodoList;
