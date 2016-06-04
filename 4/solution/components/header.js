import React from 'react';

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

const Header = ({children}) => (
	<header style={headerStyle}>{children}</header>
);

export default Header;
