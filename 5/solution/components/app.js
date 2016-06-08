import React from 'react';
import TodoList from './todo-list';
import Header from './header';
import Filter from './filter';
import TodoInput from './todo-input';

let lastId = 0;
const createTodo = (name) => ({
    name,
    id: lastId++,
});

const initialTodos = [
    createTodo('learn React'),
    createTodo('learn Flux'),
    createTodo('create an app'),
];

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
};

const App = React.createClass({
    getInitialState() {
        const todos = {};

        initialTodos.forEach(todo => {
            todos[todo.id] = todo;
        });

        return {
            todos,
            filter: 'all',
        };
    },

    addTodo(todoName) {
        const newTodo = createTodo(todoName);
        this.setState({
            todos: {
                ...this.state.todos,
                [newTodo.id]: newTodo,
            },
        });
    },

    toggleTodo(id) {
        const todoToUpdate = this.state.todos[id];
        const updatedTodo = {
            ...todoToUpdate,
            isDone: !todoToUpdate.isDone,
        };

        this.setState({
            todos: {
                ...this.state.todos,
                [id]: updatedTodo,
            },
        });
    },

    getTodos(filter) {
        return Object.keys(this.state.todos)
            .map(id => this.state.todos[id])
            .filter(todo => {
                if (filter === 'done') {
                    return todo.isDone;
                } else if (filter === 'pending') {
                    return !todo.isDone;
                } else {
                    return true;
                }
            });
    },

    handleFilterChange(filter) {
        this.setState({filter});
    },

    render() {
        return (
            <div style={containerStyle}>
                <Header>Todo App</Header>
                <TodoInput onNewTodo={this.addTodo} />
                <TodoList
                    todos={this.getTodos(this.state.filter)}
                    onClickTodo={this.toggleTodo}
                />
                <Filter
                    filterValue={this.state.filter}
                    onSelectFilter={this.handleFilterChange}
                />
            </div>
        );
    },
});

export default App;
