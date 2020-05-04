import { ProductListLayout, CategoryNavLayout } from './components';

// Extracted from App js because it is needed in Header as well
export const routes = {
	'/': {
		title: 'ProductList',
		component: ProductListLayout,
	},
	'/CategoryNav': {
		title: 'CategoryNav',
		component: CategoryNavLayout,
	},
};
