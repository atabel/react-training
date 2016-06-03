import React from 'react';

const containerStyle = {
	display: 'flex',
	flexDirection: 'column',
	height: '100vh',
};

const headerStyle = {
	flexShrink: 0,
	height: 50,
	background: '#FFC107',
	fontSize: 26,
	color: 'white',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};

const contentStyle = {
	flex: 1,
	background: '#eee',
	padding: 20
};

const todoStyle = {
	padding: '16px 0'
};

const labelStyle = {
	fontWeight: 500,
	marginBottom: 16,
}

const App = () => (
	<div style={containerStyle}>
		<header style={headerStyle}><h1>Todo App</h1></header>
		<section style={contentStyle}>
			<div style={labelStyle}>Things to do:</div>
			<ul>
				<li style={todoStyle}>
					<span>learn React</span>
				</li>
				<li style={todoStyle}>
					<span>learn Flux</span>
				</li>
				<li style={todoStyle}>
					<span>create an app</span>
				</li>
			</ul>
		</section>
	</div>
);

export default App;