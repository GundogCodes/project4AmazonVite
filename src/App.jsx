
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar/NavBar'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import routes from './router/routes'
import HomePage from './pages/HomePage/HomePage'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import ItemPage from './pages/ItemPage/ItemPage'
import LoginPage from './pages/LoginPage/LoginPage'
import OrderPage from './pages/OrderPage/OrderPage'
import SearchPage from './pages/SearchPage/SearchPage'
import UserPage from './pages/UserPage/UserPage'
import WishlistPage from './pages/WishlistPage/WishlistPage'
import AddressFormPage from './pages/AddressFormPage/AddressFormPage'
import YourPaymentPage from './pages/YourPaymentsPage/YourPaymentsPage'
import EditUserPage from './pages/EditUserPage/EditUserPage'
import {getUser} from '../src/utilities/users-service.cjs'
import Footer from './components/Footer/Footer'
import LogOut from './components/LogOut/LogOut'

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import routes from './router/routes';
import HomePage from './pages/HomePage/HomePage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import ItemPage from './pages/ItemPage/ItemPage';
import LoginPage from './pages/LoginPage/LoginPage';
import OrderPage from './pages/OrderPage/OrderPage';
import SearchPage from './pages/SearchPage/SearchPage';
import UserPage from './pages/UserPage/UserPage';
import WishlistPage from './pages/WishlistPage/WishlistPage';
import AddressFormPage from './pages/AddressFormPage/AddressFormPage';
import YourPaymentPage from './pages/YourPaymentsPage/YourPaymentsPage';
import EditUserPage from './pages/EditUserPage/EditUserPage';
import { getUser } from '../src/utilities/users-service.cjs';

import LogOut from './components/LogOut/LogOut';
import Footer from './components/Footer/Footer';
import CategoryBar from './components/CategoryBar/CategoryBar';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <>


    <NavBar routes={routes} />
    <Routes>
      <Route path="/" element={<HomePage  />}/>
      <Route path="/user" element={<UserPage user={user} setUser={setUser}/>}/>
      <Route path="/search" element={<SearchPage/>}/>
      <Route path="/item/:id" element={<ItemPage/>}/>
      <Route path="/categories" element={<CategoryPage />}/>
      <Route path="/orders" element={<OrderPage/>}/>
      <Route path="/address" element={<AddressFormPage user={user} setUser={setUser} />}/>
      <Route path="/payments" element={<YourPaymentPage user={user} setUser={setUser}/>}/>
      <Route path="/edit" element={<EditUserPage user={user} setUser={setUser}/>}/>
      <Route path="/login" element={<LoginPage user={user} setUser={setUser}/>}/>
      <Route path="/wishlist" element={<WishlistPage user={user} setUser={setUser}/>}/>
      </Routes>
    <LogOut user={user} setUser={setUser}/>
    </>
  );
}

export default App;
