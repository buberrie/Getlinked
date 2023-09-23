import './nav-bar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import hamburger from '../../assets/hamburger.svg'
import close from '../../assets/close.svg'
import { useLocation } from 'react-router-dom';

const NavBar = ({onShow, navShow}) => {

      // Get the current route location
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
      onShow()
    };

  return (
    <>
        <div className="nav-wrapper">
            <div className='logo-div'>
            <Link to='/homepage' className='link'> 
            <span className='logo logo-white'>get</span>
                <span className='logo logo-dark'>linked</span>
            
            </Link>
            </div>
            <img src={hamburger} alt="NavBar" className="hamburger mobile" onClick={toggleNavbar} navShow={navShow}/>
            <div className={`nav-bar ${navShow ? 'open' : ''} ${isOpen ? 'slide-in' : 'slide-out'}`} navShow={navShow}>
                <div className="close-back mobile" onClick={toggleNavbar}>
                <img src={close} alt="close" className="close mobile" />
                </div>
                <ul className="nav-links">
                    <li className={`nav-list ${location.pathname === '/timeline' ? 'active' : ''}`}><Link to='/timeline' className='link'> Timeline </Link></li>
                    <li className={`nav-list ${location.pathname === '/overview' ? 'active' : ''}`}><Link to='/overview' className='link'> Overview </Link></li>
                    <li className={`nav-list ${location.pathname === '/faqs' ? 'active' : ''}`}><Link to='/faqs' className='link'> FAQs </Link></li>
                    <li className={`nav-list ${location.pathname === '/contactUs' ? 'active' : ''}`}><Link to='/contactUs' className='link'> Contact </Link></li>
                </ul>
                <div className= {location.pathname === '/Register' ? 'custom-btn' : ''}>
                <Link to='/Register'><button className={`button ${location.pathname === '/Register' ? 'custom-button' : ''}`}>Register</button></Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default NavBar