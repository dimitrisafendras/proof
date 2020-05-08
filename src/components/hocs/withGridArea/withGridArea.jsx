import React from 'react';

export const withGridArea = BaseComponent => ({area}) =>  {
	return (
		<BaseComponent area={area}/>
	);
};