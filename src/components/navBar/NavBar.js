import './nav-bar.css'
import { Link } from 'react-router-dom'
import hamburger from '../../assets/hamburger.svg'
import close from '../../assets/close.svg'

const NavBar = (props) => {
  return (
    <>
        <div className="nav-wrapper">
            <div className='logo-div'>
            <Link to='/homepage' className='link'> 
            <span className='logo logo-white'>get</span>
                <span className='logo logo-dark'>linked</span>
            
            </Link>
            </div>
            <img src={hamburger} alt="NavBar" className="hambuger mobile" />
            <div className="nav-bar">
                <div className="close-back mobile">
                <img src={close} alt="close" className="close " />
                </div>
                <ul className="nav-links">
                    <li className="nav-list"><Link to='/timeline' className='link'> Timeline </Link></li>
                    <li className="nav-list"><Link to='/overview' className='link'> Overview </Link></li>
                    <li className="nav-list"><Link to='/faqs' className='link'> FAQs </Link></li>
                    <li className={`nav-list ${props.link}`}><Link to='/contactUs' className='link'> Contact </Link></li>
                </ul>
                <div className= {props.btnBorder}>
                <Link to='/Register'><button className={`button ${props.button}`}>Register</button></Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default NavBar