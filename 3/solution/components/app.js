import React from 'react';
import TodoList from './todo-list';
import Header from './header';

const containerStyle = {
	display: 'flex',
	flexDirection: 'column',
	height: '100vh',
};

const contentStyle = {
	flex: 1,
	background: '#eee',
	padding: 20
};

const labelStyle = {
	fontWeight: 500,
	marginBottom: 16,
}

const App = () => (
	<div style={containerStyle}>
		<Header>Todo App</Header>
		<section style={contentStyle}>
			<div style={labelStyle}>Things to do:</div>
			<TodoList />
		</section>
	</div>
);

export default App;