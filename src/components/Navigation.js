import styles from '../components/Navigation.module.css';


function Navigation(){
    return(
    <div className={styles.headerNEW}>
        <nav className={styles.navbar}>
            <img src="https://i.imgupx.com/NrZyLoyH/Logo.png" alt="" className={styles.logo}/>
            <ul>
                <li> <a href="#">Home</a></li>
                <li> <a href="#">Login</a></li>
                <li> <a href="#">Register</a></li>
                <li> <a href="#">Catalog</a></li>
                <li> <a href="#">CREATE</a></li>
                <li> <a href="#">My Profile</a></li>
            </ul>
        </nav>
    </div>
    )
}

export default Navigation