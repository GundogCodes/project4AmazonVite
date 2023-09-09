import './CategoryBar.css'
// importing libraries

import React from 'react'
import { slide as Menu } from 'react-burger-menu'

/*************
 the burger menu button will be placed inside of the search bar
 *************/

export default function CategoryBar(props){
    return(

      <Menu>
        <a className="menu-item" href="/">
          test
        </a>
      </Menu>
        
    )

    
}