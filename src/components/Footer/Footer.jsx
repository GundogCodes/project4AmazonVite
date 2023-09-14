import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'
export default function Footer(props){
    return(
        <div className={styles.Footer}>
            <section>
                <h6>Get to Know Us</h6>
                <a href={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}><p>Careers</p>
                <p>Scamazon and Our Planet</p>
                <p>Investor Relations</p>
                <p>Press Releases</p>
                <p>Scamazon Science</p></a>
            </section>

            <section>
                <h6>Make Money with Us</h6>
                <a href={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}><p>Sell on Scamazon</p>
                <p>Supply to Scamazon</p>
                <p>Become an Affiliate</p>
                <p>Protect & Build Your Brand</p>
                <p>Sell on Scamazon Handmade</p>
                <p>Advertise Your Products</p>
                <p>Independently Publish with Us</p>
                <p>Host an Scamazon Hub</p></a>
            </section>
            
            <section>
                <h6>Amazon Payment Products</h6>
                <a href={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}><p>Scamazon.com Rewards Mastercard</p>
                <p>Shop with Points</p>
                <p>Reload Your Balance</p>
                <p>Scamazon Currency Converter</p>
                <p>Gift Cards</p>
                <p>Scamazon Cash</p></a>
            </section>
            
            <section>
                <h6>Let us Help You</h6>
                <a href={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}> <p>Shipping Rates & Policies</p>
                <p>Scamazon Prime</p>
                <p>Returns Are Easy</p>
                <p>Manage Your Content and Devices</p>
                <p>Customer Service</p></a>
            </section>
        
        </div>
    )
}