import './CategoryBar.css'
import { slide as Menu } from 'react-burger-menu'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CategoryBar({ categories, activeCategory, setActiveCategory }){
  const [category, setCategory] = useState('')

  // .find req.params by category # and send to CategoryPage
  // set active category to category # and send to CategoryPage


    return(
      <>
        <Menu>
          <a className='menu-item' href='/categories'>
          {/* send category num */}
            Electronics
          </a>
          <a className='menu-item' href='/categories'>
            Toys
          </a>
          <a className='menu-item' href='/categories'>
            Gym Equipment
          </a>
          <a className='menu-item' href='/categories'>
            Air
          </a>
          <a className='menu-item' href='/categories'>
            Clothes
          </a>
          <a className='menu-item' href='/categories'>
            Cosmetics
          </a>
          <a className='menu-item' href='/categories'>
            Books
          </a>
        </Menu>
      </>
    )
}
