import styles from './CategoryPage.module.scss'
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
export default function CategoryPage({searchableItems}){

    const { name } = useParams();
    const [neededItems, setNeededItems] = useState(null)
    const [category, setCategory] = useState('')
    
    //console.log('nameOfCategory', name)
    //console.log('searchableItems in CategoryPage: ', searchableItems)

    // if(name === 'sportingGoods'){
    //     setCategory('Sporting Goods')
    // } else if(name==='makeUpAndCosmetics'){
    //     setCategory('Make-up And Cosmetics')
    // } else{
    //     setCategory(name)
    // }

    useEffect(()=>{
        setCategory(name)
    const matchedCategoryItems = []
        for(let items of searchableItems){
            // console.log(items.category.name)
            if(items.category.name === name){
                matchedCategoryItems.push(items)
            }
        }
        setNeededItems(matchedCategoryItems)
        
        //console.log('neededItems ',neededItems)
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
            {/* <Footer/> */}
        </div>
    )
}