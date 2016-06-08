import React from 'react';

const inputContainerStyle = {
    display: 'flex',
    height: 40,
    flexShrink: 0,
};

const inputStyle = {
    flex: 1,
    padding: '0 16px',
};

const buttonStyle = {
    width: 50,
};

const TodoInput = React.createClass({
    handleButtonClick() {
        const todoName = this.refs.todoInput.value.trim();
        if (todoName.length > 0) {
            this.props.onNewTodo(todoName);
        }
    },

    render() {
        return (
            <div style={inputContainerStyle}>
                <input style={inputStyle} type="text" ref="todoInput" />
                <button style={buttonStyle} onClick={this.handleButtonClick}>Add</button>
            </div>
        );
    },
});

export default TodoInput;
