import styles from './NavBar.module.scss'
import {Link} from 'react-router-dom'
import CategoryBar from '../CategoryBar/CategoryBar'

export default function NavBar(props){
    return(
      <div className="container">
        <nav className={styles.NavBarDiv}>
          {props.routes.map(({key,path})=>(
            <div className={styles.titles}>
              <Link to={path} key={key} >{key}</Link>
            </div>
          ))}
        </nav>
      </div>
    )
}