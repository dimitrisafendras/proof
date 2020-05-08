import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

export const Header = ({area}) => {
	return (
		<div className='Header' style={{gridArea: area}}>
			<Link to="/">ProductList</Link>
			<Link to="/CategoryNav">CategoryNav</Link>
		</div>
	);
};
