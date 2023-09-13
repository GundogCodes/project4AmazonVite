import { useEffect, useState, useRef, Component } from 'react'
import { getUser } from '../../utilities/users-service.cjs'
import styles from './SearchBar.module.scss'
import { Link, useNavigate } from 'react-router-dom'

export default function SearchBar({ searchableItems, user, matchedSearches,setMatchedSearches, dataOfMatchedSearches, setDataOfMatchedSearches}) {

    const [searchButtonClicked, setSearchButtonClicked] = useState(false)

    const navigate =  useNavigate()

    const inputBar = useRef(null)
    const [userSearch,setUserSearch] = useState('')


    const itemIdArr = []
    const itemNameArr = []

    
    for(let item of searchableItems){
        itemNameArr.push(item.name)
        itemIdArr.push(item._id)
        
    }
    function handleChange(e){
        const foundSearchedItem = []
        setUserSearch(e.target.value)
        console.log('user is typing: ',userSearch)
        if( userSearch === null || userSearch === '  Search Scamazon.com'){
            setMatchedSearches([])
        } else{
            for(let name of itemNameArr){
                
                if(name.toLowerCase().includes(userSearch.toLowerCase())){
                    //console.log('search matches this item: ', name)
                    foundSearchedItem.push(name)
                    setMatchedSearches(foundSearchedItem)
                }
            }
        }
    }
    function handleButtonClick(){
        const idOfMatchedResult = []
        console.log('button clicked: ',inputBar.current.value)
        console.log('all returned items', matchedSearches)
        for(let element of matchedSearches){
            for(let item of searchableItems){
                if(element === item.name){
                     idOfMatchedResult.push({
                        name:item.name,
                        itemId:item._id, itemPrice:item.price,
                        itemDes:item.description, 
                        itemRating:item.rating,
                        img:item.image})
                }
            }
        }
        setDataOfMatchedSearches(idOfMatchedResult)
        navigate('/search')
        }
    
    
    
    function handleLiClick(e){
        const clickedItem = e.target.innerText
        console.log('clickedItem ', clickedItem)
        const indexOfClickedItem = itemNameArr.indexOf(clickedItem)
        const idOfClickedItem = itemIdArr[indexOfClickedItem]
        console.log('indexofclickedItem', indexOfClickedItem)
        console.log('idOfClickedItem',idOfClickedItem)

        console.log('ClICKEDITEM ID : ', idOfClickedItem)
        navigate(`/item/${idOfClickedItem}`)

    }

    function handleKeyDown(e){
        if(e.code ==='Enter'){
            const idOfMatchedResult = []
        console.log('button clicked: ',inputBar.current.value)
        console.log('all returned items', matchedSearches)
        for(let element of matchedSearches){
            for(let item of searchableItems){
                if(element === item.name){
                     idOfMatchedResult.push({
                        name:item.name,
                        itemId:item._id, itemPrice:item.price,
                        itemDes:item.description, 
                        itemRating:item.rating,
                        img:item.image})
                }
            }
        }
        setDataOfMatchedSearches(idOfMatchedResult)
        navigate('/search')
        }
    }

    return (
        <div className={styles.SearchBar}>
            
                <div className={styles.searchBarDiv}>
                    <input ref={inputBar} type='search' onChange={handleChange} onKeyDown={handleKeyDown} placeholder='  Search Scamazon.com'  />
                    <button onClick={handleButtonClick} ></button>
                </div>

                    {matchedSearches.length > 0 && (

                        <ul  className={styles.searchResultsList}
                            onMouseLeave={
                                e=>{
                                    setMatchedSearches([''])
                                }
                            }
                        >
                            {
                                matchedSearches.map(result =>{
                                    return <li  key={itemIdArr.indexOf(result)} onClick={handleLiClick} className={styles.searchResult}>{result}</li>
                                })
                            }
                        </ul>

                                )}
                    


            
        </div>
    )
}