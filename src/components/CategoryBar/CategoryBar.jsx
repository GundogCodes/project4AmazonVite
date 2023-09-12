import './CategoryBar.css'
import { slide as Menu } from 'react-burger-menu'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CategoryBar({ categories, searchableItems }){
  //use states
  const [category, setCategory] = useState('')
  const navigate = useNavigate()


  //trying to catch the corresponding category
  function handleOnClick(e){
    //defining variables
    let clickedCategory = e.target.innerText
    clickedCategory.toLowerCase()
    category(clickedCategory)
      
    //sending the category to the category page
      setCategoryItems(itemsArr)
      navigate('/categories', {
        state: {
          category: category
        }
      })
    }
  }

    return(
      <>
        <Menu>
          <a className='menu-item' href='/categories' onClick={handleOnClick}>
            Electronics
          </a>
          <a className='menu-item' href='/categories' onClick={handleOnClick}>
            Toys
          </a>
          <a className='menu-item' href='/categories' onClick={handleOnClick}>
            Gym Equipment
          </a>
          <a className='menu-item' href='/categories' onClick={handleOnClick}>
            Air
          </a>
          <a className='menu-item' href='/categories' onClick={handleOnClick}>
            Clothes
          </a>
          <a className='menu-item' href='/categories' onClick={handleOnClick}>
            Cosmetics
          </a>
          <a className='menu-item' href='/categories' onClick={handleOnClick}>
            Books
          </a>
        </Menu>
      </>
    )

}
