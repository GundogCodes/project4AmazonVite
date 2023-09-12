import styles from './Footer.module.scss'

export default function Footer(props){
    return(
        <>
            <footer className={styles.footer}>
            <div className={styles.footer__addr}>
                <h1 className={styles.footer__logo}>Something</h1>
                    
                <h2>Contact</h2>
                
                <address>
                5534 Somewhere In. The World 22193-10212<br/>
                    
                <a className={styles.footer__btn} href="mailto:example@gmail.com">Email Us</a>
                </address>
            </div>
            
            <ul className={styles.footer__nav}>
                <li className={styles.nav__item}>
                <h2 className={styles.nav__title}>Media</h2>

                <ul className={styles.nav__ul}>
                    <li>
                    <a href="#">Online</a>
                    </li>

                    <li>
                    <a href="#">Print</a>
                    </li>
                        
                    <li>
                    <a href="#">Alternative Ads</a>
                    </li>
                </ul>
                </li>
                
                <li className="nav__item nav__item--extra">
                <h2 className={styles.nav__title}>Technology</h2>
                
                <ul className={styles.nav__ul}>
                    <li>
                    <a href="#">Hardware Design</a>
                    </li>
                    
                    <li>
                    <a href="#">Software Design</a>
                    </li>
                    
                    <li>
                    <a href="#">Digital Signage</a>
                    </li>
                    
                    <li>
                    <a href="#">Automation</a>
                    </li>
                    
                    <li>
                    <a href="#">Artificial Intelligence</a>
                    </li>
                    
                    <li>
                    <a href="#">IoT</a>
                    </li>
                </ul>
                </li>
                
                <li className={styles.nav__item}>
                <h2 className={styles.nav__title}>Legal</h2>
                
                <ul className={styles.nav__ul}>
                    <li>
                    <a href="#">Privacy Policy</a>
                    </li>
                    
                    <li>
                    <a href="#">Terms of Use</a>
                    </li>
                    
                    <li>
                    <a href="#">Sitemap</a>
                    </li>
                </ul>
                </li>
            </ul>
            
            <div className={styles.legal}>
                <p>&copy; 20Something. All rights reserved.</p>
                
                <div className={styles.legal__links}>
                <span>Made with <span className={styles.heart}>♥</span> remotely from Anywhere</span>
                </div>
                </div>
            </footer>
        </>
    )
}