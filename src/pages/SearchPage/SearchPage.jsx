import styles from './SearchPage.module.scss'
import { useEffect, useRef } from "react"
import { useNavigate ,Link} from "react-router-dom"




export default function SearchPage({matchedSearches,setMatchedSearches, searchableItems, dataOfMatchedSearches, setDataOfMatchedSearches}){
    //console.log('matchedSearched in SP', matchedSearches[0])
    const navigate = useNavigate()
    const itemElement = useRef()


    if(matchedSearches.length <1 ){
        navigate('/')
    }
    


    return(
        <div className={styles.SearchPage}>
            <h1>Results</h1>
            {
                dataOfMatchedSearches && dataOfMatchedSearches.length > 0 ?
                <>
                {dataOfMatchedSearches.map(result=>{
                    
                    return <Link to={`/item/${result.itemId}`}><div style={{color:'black'}} className={styles.itemCard} >
                        <div  className={styles.imageSide}>

                        <h6>{result.name}</h6>
                        <img src={`${result.img}`} />
                        </div>
                        <div className={styles.itemInfo}>

                        <p className={styles.itemDes}>{result.itemDes}</p>
                        <p className={styles.itemPrice}>${result.itemPrice}</p>
                        <p className={styles.itemRating}>{result.itemRating} /5</p>

                        </div>

                        </div></Link>
                })}
                </>
                :
                <>
                </>
            }


        </div>
    )
}


/*

 const clickedItem = e.target.name
        console.log('clicked Item ',clickedItem)
        const getIndexOfClickedItem  = matchedSearches.indexOf(clickedItem)
        console.log('index of clicked item', getIndexOfClickedItem)
        const idOfClickedItem = dataOfMatchedSearches[getIndexOfClickedItem]
        console.log('idofClickedItem', idOfClickedItem)
        navigate(`/item/${idOfClickedItem}`)
 */