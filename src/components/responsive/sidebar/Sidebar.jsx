import React from 'react';
import './Sidebar.css';

export const Sidebar = ({area}) => {
	return (
		<div className='Sidebar' style={{gridArea: area}}>
		</div>
	);
};