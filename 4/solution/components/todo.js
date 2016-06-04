import React from 'react';

const todoStyle = {
	padding: 16,
	cursor: 'pointer',
	borderBottom: '1px solid #ccc',
};

const doneTodoStyle = {
	...todoStyle,
	textDecoration: 'line-through',
};

const Todo = ({name, isDone, onClick}) => (
	<li style={isDone ? doneTodoStyle : todoStyle} onClick={onClick}>
		<span>{name}</span>
	</li>
);

export default Todo;
