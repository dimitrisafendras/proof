import { ProductList, CategoryNav } from './components';

// Extracted from App js because it is needed in Header as well
export const routes = {
	'/': {
		title: 'ProductList',
		component: ProductList,
	},
	'/CategoryNav': {
		title: 'CategoryNav',
		component: CategoryNav,
	},
};
