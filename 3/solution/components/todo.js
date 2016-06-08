import React from 'react';

const todoStyle = {
    padding: '16px 0',
};

const Todo = ({name}) => (
    <li style={todoStyle}>
        <span>{name}</span>
    </li>
);

export default Todo;
