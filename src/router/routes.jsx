import LoginPage from '../pages/LoginPage/LoginPage';
import UserPage from '../pages/UserPage/UserPage';
import HomePage from '../pages/HomePage/HomePage';
import SearchPage from '../pages/SearchPage/SearchPage';
import ItemPage from '../pages/ItemPage/ItemPage';
import CategoryPage from '../pages/LoginPage/LoginPage';
import OrderPage from '../pages/LoginPage/LoginPage';
import WishlistPage from '../pages/LoginPage/LoginPage';
import CartPage from '../pages/CartPage/CartPage';


const routes = [

	{
		Component: HomePage,
		key: 'Home',
		path: '/'
	},
	{//Contains the signup as well
		Component: LoginPage,
		key: 'Login',
		path: '/login'
	},
	{
		Component: UserPage,
		key: 'User',
		path: '/user'
	},
	{
		Component: SearchPage,
		key: 'Search',
		path: '/search'
	},
	{
		Component: ItemPage,
		key: 'Item',
		path: '/item/:id'
	},
	{
		Component: CategoryPage,
		key: 'Category',
		path: '/categories'
	},
	{
		Component: OrderPage,
		key: 'Order',
		path: '/orders'
	},
	{
		Component: CartPage,
		key: 'Cart',
		path: '/cart'
	}

];

export default routes;
