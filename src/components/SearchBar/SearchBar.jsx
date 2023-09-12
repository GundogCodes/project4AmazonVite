import { useEffect, useState, useRef, Component } from 'react'
import { getUser } from '../../utilities/users-service.cjs'
import styles from './SearchBar.module.scss'
import { Link, useNavigate } from 'react-router-dom'

export default function SearchBar({ searchableItems, user, matchedSearches,setMatchedSearches}) {
   console.log('searchableItems (on SearchBar2)', searchableItems)
   //console.log('searchableItems in SB', searchableItems)
    const [searchButtonClicked, setSearchButtonClicked] = useState(false)
    const [clickedItemID, setClickedItemID] = useState('')
    const navigate =  useNavigate()

    const inputBar = useRef(null)
    const [userSearch,setUserSearch] = useState('')
    const liKey = useRef()
    console.log('searchableItems', searchableItems) //this returns the array properly
    //console.log('itemsArr', itemsArr[2].name) this returns name properly
    //console.log(user)
    const itemIdArr = []
    const itemNameArr = []

    
    for(let item of searchableItems){
        //console.log(item._id)
        itemNameArr.push(item.name)
        itemIdArr.push(item._id)
        
    }
    //console.log('itemNameArr ', itemNameArr)
    //console.log('itemIdArr ', itemIdArr)
    function handleChange(e){
        const foundSearchedItem = []
        setUserSearch(e.target.value)
        console.log('user is typing: ',userSearch)
        if(userSearch === ' ' || userSearch === '' || userSearch === null || userSearch === '  Search Scamazon.com'){
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
    //console.log('matched Search items: ',matchedSearches)
    //console.log('itemandNumArr', itemIdArr)
    
    function handleButtonClick(){
        console.log('button clicked: ',inputBar.current.value)
        console.log('all returned items', matchedSearches)
        setSearchButtonClicked(true)
    }
    
    function handleLiClick(e){
        const clickedItem = e.target.innerText
        console.log('clickedItem ', clickedItem)
        const indexOfClickedItem = itemNameArr.indexOf(clickedItem)
        const idOfClickedItem = itemIdArr[indexOfClickedItem]
        console.log('indexofclickedItem', indexOfClickedItem)
        console.log('idOfClickedItem',idOfClickedItem)
        //navigate(`item/${idOfClickedItem}`)
        //setClickedItemID(idOfClickedItem)

        console.log('ClICKEDITEM ID : ', idOfClickedItem)
        navigate(`/item/${idOfClickedItem}`)

    }
    
    return (
        <div className={styles.SearchBar}>
            
                <div className={styles.searchBarDiv}>
                <input ref={inputBar} type='search' onChange={handleChange} placeholder='  Search Scamazon.com'  />
                <button onClick={handleButtonClick} ></button>
                </div>

                    {matchedSearches.length > 0 && (

                        <ul className={styles.searchResultsList}>
                         
            
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