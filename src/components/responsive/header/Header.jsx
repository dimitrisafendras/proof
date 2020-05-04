import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

export const Header = ({}) => {
	return (
		<div className='Header'>
			<Link to="/">ProductList</Link>
			<Link to="/CategoryNavLayout">CategoryNavLayout</Link>
		</div>
	);
};