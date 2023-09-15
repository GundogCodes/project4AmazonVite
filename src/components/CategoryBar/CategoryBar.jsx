import styles from './CategoryBar.module.scss'
import { useNavigate } from 'react-router-dom'
export default function CategoryBar(){
  const navigate = useNavigate()
  const categories =  ['Electronics', 'Sporting Goods', 'Make-up and Cosmetics', 'Books','Air', 'Toys']
  function handleOnClick(e){

    const innerText = e.target.innerText

      navigate(`/categories/${innerText}`)
      
    
  }
  return(
    <div className={styles.CategoryBar}>
      {categories.map(category =>{
        return <h5 onClick={handleOnClick} >{category}</h5>
      })}

    </div>
  )
}