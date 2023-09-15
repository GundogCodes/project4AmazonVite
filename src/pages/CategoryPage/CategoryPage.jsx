import styles from './CategoryPage.module.scss'
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
export default function CategoryPage({searchableItems}){

    const { name } = useParams();
    const [neededItems, setNeededItems] = useState(null)
    const [category, setCategory] = useState('')
    

    useEffect(()=>{
        setCategory(name)
    const matchedCategoryItems = []
        for(let items of searchableItems){

            if(items.category.name === name){
                matchedCategoryItems.push(items)
            }
        }
        setNeededItems(matchedCategoryItems)
        

    },[name])
       

    

    return(
        <div className={styles.CategoryPage}>
            <div className={styles.header}>
                <h1 className={styles.titles}>{name}</h1>
            </div>
            <section>
                
                { neededItems && 
                neededItems.map(item=>{
                    return <Link to={`/item/${item._id}`}><div style={{color:'black'}} className={styles.itemCard}>
                        <p className={styles.name}>{item.name}</p>
                        <img src={item.image}/>
                        <p className={styles.des}>{item.description}</p>
                        <p className={styles.price}>${item.price}</p>
                        <p className={styles.rating}>{item.rating} /5</p>


                        </div></Link>
                })}
            </section>

        </div>
    )
}