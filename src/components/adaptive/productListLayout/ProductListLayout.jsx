import React from 'react';
import './ProductListLayout.css';

export const ProductListLayout = ({}) => {
	return (
		<div className='ProductListLayout'>
			<div className='Breadcrumb'></div>
			<div className='Title'></div>
			<div className='Filters'>
				<div style={{height: '1000px'}}></div>
			</div>
			<div className='Products'></div>
		</div>
	);
};