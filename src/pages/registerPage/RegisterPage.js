import {useState} from 'react'
import "./register-page.css";
import Modal from '../../components/modal/Modal';
import NavBar from "../../components/navBar/NavBar";
import purplelens2 from "../../assets/Purple-Lens-Flare2.png";
import purplelens3 from "../../assets/Purple-Lens-Flare3.png";
import star from "../../assets/star.png";
import starWhite from "../../assets/star-white.png";
import starPink from "../../assets/star-pink.png";
import starPurple from "../../assets/star-purple.png";


const RegisterPage = () => {

    const [check, setCheck] = useState(false)
    const checked = () => {
        setCheck(!check)
        
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('clicked')
    };

    const [modal, setModal] = useState(false)
    const toggleModal = () => setModal(!modal)

  return (
    <>
      <NavBar btnBorder="custom-btn" button="custom-button" />
      {modal && <Modal toggleModal={toggleModal}/>}
      <div className="register">
        <img src={starPink} alt="" className="star-even star39" />
        <img src={star} alt="" className="star-odd star40" />
        <img src={starPurple} alt="" className="star-even star41" />
        <img src={starWhite} alt="" className="star-odd star42" />
        <img src={purplelens3} alt="" className="contact-lens" />
        <div className="register-img">
          <img src="" alt="" />
        </div>
        <div className="form-container">
          <h2 className="heading">Register</h2>
          <div className="be-part">
            <span>Be part of this movement!</span>
            <div className="walking-emoji">
              <img src={star} alt="" className="img" />
              <img src={star} alt="" className="img" />
            </div>
          </div>
          <h3 className="subheading">CREATE YOUR ACCOUNT</h3>
          <form action="submit" onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor="Name">Team's Name</label>
              <input
                type="text"
                id="Name"
                placeholder="Enter the name of your group"
              />
            </div>
            <div className="input-container">
              <label htmlFor="Number">Phone</label>
              <input
                type=""
                id="Number"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email address"
              />
            </div>
            <div className="input-container">
              <label htmlFor="topic">Project Topic</label>
              <input
                type="text"
                id="topic"
                placeholder="What is your group project topic"
              />
            </div>
            <div className="select-container">
              <label htmlFor="category" className='select-label'>Category</label>
              <select name="category" id="category">
                <option value="" selected>Select your category</option>
                <option value="Artificial intelligence">Artificial intelligence</option>
                <option value="Data science">Data science</option>
                <option value="Database Administration">Database Administration</option>
                <option value="Software Develop">Software Develop</option>
                <option value="Enginering">Enginering</option>
                <option value="Web3">Web3</option>
              </select>
            </div>
            <div className="select-container">
              <label htmlFor="size" className='select-label'>Group Size</label>
              <select name="size" id="size">
              <option value="">Select</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <span className="reminder">Please review your registration details before submitting</span>
            <div className="agree" onClick={checked}>
            <div className="check-box">
                {check && <img src={starWhite} onClick={checked} alt="" className="checker" />}
            </div>
            <span>
            I agreed with the event terms and conditions and privacy policy
            </span>
            </div>
            <div className="btn">
              <button type="submit" className="button" onClick={toggleModal} disabled={check === false}>
                Register Now
              </button>
            </div>
          </form>
        </div>
        <img src={purplelens2} alt="" className="register-lens2" />
      </div>
    </>
  );
};

export default RegisterPage;
