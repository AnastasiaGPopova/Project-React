import styles from '../components/Navigation.module.css';
import {singInWithGoogle, singIn, logOut} from "../authService/firebaseAuthService"


function Navigation({isLogged}){
    return(
    <div className={styles.headerNEW}>
        <nav className={styles.navbar}>
            <img src="https://i.imgupx.com/NrZyLoyH/Logo.png" alt="" className={styles.logo}/>
            <ul>
            <li> <a href="/">Home</a></li>
            <li> <a href="/catalog">Catalog</a></li>

                { isLogged ?
                 (<>
                 <li> <a href="/create">CREATE</a></li>
                 <li> <a href="/myprofile">My Profile</a></li>
                 <li> <a href="/" onClick={logOut}>LOGOUT</a></li>
                 </>)
                 :
                 (<><li> <a href="/login">Login</a></li>
                 <li> <a href="/register">Register</a></li></>)
                }
                
                {/* <li> <a href="/">Home</a></li>
                <li> <a href="/login">Login</a></li>
                <li> <a href="/register">Register</a></li>
                <li> <a href="/catalog">Catalog</a></li>

                <li> <a href="/create">CREATE</a></li>
                <li> <a href="/myprofile">My Profile</a></li>
                <li> <a href="/" onClick={logOut}>LOGOUT</a></li> */}
            </ul>
        </nav>
    </div>
    )
}

export default Navigation