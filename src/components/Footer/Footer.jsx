import styles from './Footer.module.scss'

export default function Footer(props){
    return(
        <>
            <footer class={styles.footer}>
            <div class={styles.footer__addr}>
                <h1 class={styles.footer__logo}>Something</h1>
                    
                <h2>Contact</h2>
                
                <address>
                5534 Somewhere In. The World 22193-10212<br/>
                    
                <a class={styles.footer__btn} href="mailto:example@gmail.com">Email Us</a>
                </address>
            </div>
            
            <ul class={styles.footer__nav}>
                <li class={styles.nav__item}>
                <h2 class={styles.nav__title}>Media</h2>

                <ul class={styles.nav__ul}>
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
                
                <li class="nav__item nav__item--extra">
                <h2 class={styles.nav__title}>Technology</h2>
                
                <ul class={styles.nav__ul}>
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
                
                <li class={styles.nav__item}>
                <h2 class={styles.nav__title}>Legal</h2>
                
                <ul class={styles.nav__ul}>
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
            
            <div class={styles.legal}>
                <p>&copy; 20Something. All rights reserved.</p>
                
                <div class={styles.legal__links}>
                <span>Made with <span class={styles.heart}>♥</span> remotely from Anywhere</span>
                </div>
                </div>
            </footer>
        </>
    )
}