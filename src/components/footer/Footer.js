import "./footer.css";
import { Link } from 'react-router-dom'
import star from "../../assets/star.png";
import starWhite from "../../assets/star-white.png";
import starPink from "../../assets/star-pink.png";
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import facebook from '../../assets/facebook.svg'
import linkedin from '../../assets/linkedin.svg'
import phone from '../../assets/phone.svg'
import location from '../../assets/location.svg'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <img src={starWhite} alt="" className="star-odd star35" />
        <img src={star} alt="" className="star-even star36" />
        <img src={starPink} alt="" className="star-odd star37" />
        <img src={starWhite} alt="" className="star-even star38" />
        <div className="content">
          <div className="content1">
            <div className="logo-div">
              <span className="logo logo-white">get</span>
              <span className="logo logo-dark">linked</span>
            </div>
            <p className="intro">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
            <div>
              <span className="terms of-use">Terms of Use</span>
              <span className="terms">Privacy Policy</span>
            </div>
          </div>
          <div className="content2">
            <h3 className="useful-links">Useful Links</h3>
            <ul>
              <li className="footer-li"><Link to='/timeline' className='link'> Timeline </Link></li>
                    <li className="footer-li"><Link to='/overview' className='link'> Overview </Link></li>
                    <li className="footer-li"><Link to='/faqs' className='link'> FAQs </Link></li>
                    <li className="footer-li"><Link to='/Register' className='link'> Register </Link></li>
            </ul>
            <div className="socials">
              <span className="follow">Follow us</span>
              <a href="./https://instagram.com">
                <img src={instagram} alt="" className="img" />
              </a>
              <a href="./https://instagram.com">
                <img src={twitter} alt="" className="img" />
              </a>
              <a href="./https://instagram.com">
                <img src={facebook} alt="" className="img" />
              </a>
              <a href="./https://instagram.com">
                <img src={linkedin} alt="" className="img" />
              </a>
            </div>
          </div>
          <div className="content3">
            <h3 className="useful-links">Contact us</h3>
            <div className="info">
              <img src={phone} alt="" className="img" />
              <p className="detail">+234 6707653444</p>
            </div>
            <div className="info">
              <img src={location} alt="" className="img" />
              <p className="detail">27,Alara Street Yaba 100012 Lagos State</p>
            </div>
          </div>
        </div>
        <small>All rights reserved. © getlinked Ltd.</small>
      </footer>
    </>
  );
};

export default Footer;
