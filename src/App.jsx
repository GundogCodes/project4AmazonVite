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

import CategoryBar from './components/CategoryBar/CategoryBar'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <body>
      <CategoryBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
      <NavBar routes={routes} />
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/user/:id" element={<UserPage />}/>
            <Route path="/search" element={<SearchPage />}/>
            <Route path="/item/:id" element={<ItemPage />}/>
            <Route path="/categories" element={<CategoryPage />}/>
            <Route path="/orders" element={<OrderPage />}/>
            <Route path="/wishlist" element={<WishlistPage />}/>
          </Routes>
        <div className='sidebar'>
          <h2> test</h2>
        </div>
        <div>
          <h2>empty</h2>
        </div>
      </body>

      <Footer />
    </>
    
  )
}

export default App
