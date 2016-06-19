import React from 'react';
import TodoList from './todo-list';
import Header from './header';
import Filter from './filter';
import TodoInput from './todo-input';

const generateId = (id => () => id++)(0);

const createTodo = (name) => ({
    name,
    isDone: false,
    id: generateId(),
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
        return {
            todos: initialTodos,
            filter: 'all',
        };
    },

    addTodo(todoName) {
        this.setState({
            todos: [
                ...this.state.todos,
                createTodo(todoName),
            ],
        });
    },

    toggleTodo(id) {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: !todo.isDone,
                    };
                } else {
                    return todo;
                }
            }),
        });
    },

    getTodos(filter) {
        if (filter === 'done') {
            return this.state.todos.filter(todo => todo.isDone);
        } else if (filter === 'pending') {
            return this.state.todos.filter(todo => !todo.isDone);
        } else {
            return this.state.todos;
        }
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
