import React from 'react';
import './AppLayout.css';

export const AppLayout = ({children}) => {
	return (
		<div className='AppLayout'>
			{children}
		</div>
	);
};