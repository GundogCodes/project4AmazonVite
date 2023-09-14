import { getAll } from './utilities/items-api.cjs'
import { useState, useEffect } from 'react'
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

import LogOut from './components/LogOut/LogOut'
import CartPage from './pages/CartPage/CartPage'
import CategoryBar from './components/CategoryBar/CategoryBar'




function App() {
  const [matchedSearches,setMatchedSearches] = useState([])
  const [dataOfMatchedSearches, setDataOfMatchedSearches] = useState([])
  const [user, setUser] = useState(getUser());

  const [searchableItems, setSearchableItems] = useState(null)



  useEffect(  ()=>{
    (async ()=>{

      const allItems = await getAll()
      setSearchableItems(allItems)
      console.log('searchableItems', searchableItems)
      
    }) ()
    
},[])

  return (
    <>



    {searchableItems?
    <NavBar searchableItems={searchableItems} 
    user={user} 
    setUser={setUser} 
    matchedSearches={matchedSearches} 
    setMatchedSearches={setMatchedSearches}
    dataOfMatchedSearches={dataOfMatchedSearches}
    setDataOfMatchedSearches={setDataOfMatchedSearches}
    /> :<></>
  }
  <CategoryBar/>


    <Routes>
      <Route path="/" element={searchableItems && <HomePage searchableItems={searchableItems}  />}/>

      <Route path="/user" element={<UserPage user={user} setUser={setUser}/>}/>
      <Route path="/search" element={<SearchPage matchedSearches={matchedSearches} setMatchedSearches={setMatchedSearches} searchableItems={searchableItems} dataOfMatchedSearches={dataOfMatchedSearches} setDataOfMatchedSearches={setDataOfMatchedSearches}/>}/>
      <Route path="/item/:id" element={<ItemPage/>}/>
      <Route path="/categories/:name" element={searchableItems && <CategoryPage searchableItems={searchableItems} />}/>
      <Route path="/orders" element={<OrderPage/>}/>
      <Route path="/address" element={<AddressFormPage user={user} setUser={setUser} />}/>
      <Route path="/payments" element={<YourPaymentPage user={user} setUser={setUser}/>}/>
      <Route path="/edit" element={<EditUserPage user={user} setUser={setUser}/>}/>
      <Route path="/login" element={<LoginPage user={user} setUser={setUser}/>}/>
      <Route path="/wishlist" element={<WishlistPage user={user} setUser={setUser}/>}/>
      <Route path="/cart" element={<CartPage user={user} setUser={setUser} searchableItems={searchableItems}/>} />
    </Routes>
      <LogOut user={user} setUser={setUser} />
    </>
  );
}

export default App;
