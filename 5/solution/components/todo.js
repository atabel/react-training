import React from 'react';
import classNames from 'classnames';
import {useSheet} from '../styles/jss';

const styles = {
    todo: {
        padding: 16,
        cursor: 'pointer',
        borderBottom: '1px solid #ccc',

        '&:active': {
            background: '#aaa',
        },
    },

    done: {
        textDecoration: 'line-through',
    },
};

const Todo = ({name, isDone, onClick, sheet}) => {
    const {todo, done} = sheet.classes;
    return (
        <li className={classNames(todo, {[done]: isDone})} onClick={onClick}>
            <span>{name}</span>
        </li>
    );
};

export default useSheet(Todo, styles);
