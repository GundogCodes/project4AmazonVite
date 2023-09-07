import styles from "./LogOut.module.scss"
import {logOut} from "../../utilities/users-service.cjs"
export default function LogOut({user, setUser}){
function handleLogOut(){
logOut()
setUser(null)
}
    return (
        <div className={styles.LogOut}>
            <button onClick={handleLogOut}> Logout</button>
        </div>
    )
}