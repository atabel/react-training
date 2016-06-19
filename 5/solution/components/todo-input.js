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
    handleSubmit(e) {
        e.preventDefault();
        const todoName = this.input.value.trim();
        if (todoName.length > 0) {
            this.props.onNewTodo(todoName);
            this.input.value = '';
        }
    },

    render() {
        return (
            <form style={inputContainerStyle} onSubmit={this.handleSubmit}>
                <input style={inputStyle} type="text" ref={node => (this.input = node)} />
                <button style={buttonStyle}>Add</button>
            </form>
        );
    },
});

export default TodoInput;
