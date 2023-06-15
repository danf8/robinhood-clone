// import {GiRobinHoodHat} from 'react-icons/gi'
import Logo from '../robinhood-logo.svg'
// import {Link} from 'react-router-dom'
import '../css/header.css';
const Header = () => {
    return(
        <div className="header__wrap">
            <div className="logo_head">
                {/* <GiRobinHoodHat/> */}
                <img src={Logo} width={25} alt='robinhood' />
            </div>
            <div className="head__search">
                <div className='header__searchContainer'>
                    <input type="text" placeholder='Search' />
                </div>
            </div>
                <div className="header__menuItem">
                    <a href="#">Free Stocks</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Cash</a>
                    <a href="#">Messages</a>
                    <a href="#">Account</a>
                </div>
        </div>
    )
}

export default Header