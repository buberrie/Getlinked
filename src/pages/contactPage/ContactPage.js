import NavBar from "../../components/navBar/NavBar";
import "./contact-page.css";
import star from "../../assets/star.png";
import starWhite from "../../assets/star-white.png";
import starPink from "../../assets/star-pink.png";
import starPurple from "../../assets/star-purple.png";
import purplelens2 from "../../assets/Purple-Lens-Flare2.png";
import purplelens3 from "../../assets/Purple-Lens-Flare3.png";
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import facebook from '../../assets/facebook.svg'
import linkedin from '../../assets/linkedin.svg'

const handleSubmit = (e) => {
  e.preventDefault();
};

const ContactPage = () => {
  return (
    <>
      <NavBar link='custom-color'/>
      <div className="contact-us">
        <img src={starPink} alt="" className='star-even star39' />
        <img src={star} alt="" className='star-odd star40' />
        <img src={starPurple} alt="" className='star-even star41' />
        <img src={starWhite} alt="" className='star-odd star42' />
        <img src={purplelens3} alt="" className='contact-lens' />
        <div className="contact-info">
            <h1 className="heading">
            Get in touch
            </h1>
            <p className="subheading info">
            Contact<br/>Information
            </p>
            <p className="address info">
            27,Alara Street<br/>Yaba 100012<br/>Lagos State
            </p>
            <p className="call-us info">
            Call Us : 07067981819
            </p>
            <p className="open-hours info">
            we are open from Monday-Friday<br/>08:00am - 05:00pm
            </p>
            <span className="follow">
            Share on
            </span>
            <div className="socials">
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
        <form action="submit" onSubmit={handleSubmit}>
            <h2 className="heading">
            Questions or need assistance?<br/>Let us know about it!
            </h2>
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Mail' />
            <textarea name="Message" id="message" placeholder='Message'></textarea>
            <div className="btn">
            <button type="submit" className='button'>Submit</button>
            </div>
        </form>
        <img src={purplelens2} alt="" className='contact-lens2' />
      </div>
    </>
  );
};

export default ContactPage;
