import styles from "./LogOut.module.scss"
import {logOut} from "../../utilities/users-service.cjs"
import { Link, useNavigate } from 'react-router-dom';

export default function LogOut({user, setUser}){
     
const navigate = useNavigate();
function handleLogOut(){
logOut()
setUser(null)
navigate('/');
}
    return (
        <div className={styles.LogOut}>
            <button onClick={handleLogOut}> Logout</button>
        </div>
    )
}