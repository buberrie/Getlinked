import "./contact-page.css";
import { useState } from "react";
import Process from "../../components/processing/Process";
import star from "../../assets/star.png";
import starWhite from "../../assets/star-white.png";
import starPink from "../../assets/star-pink.png";
import starPurple from "../../assets/star-purple.png";
import purplelens2 from "../../assets/Purple-Lens-Flare2.png";
import purplelens3 from "../../assets/Purple-Lens-Flare3.png";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";

const baseUrl = "https://backend.getlinked.ai";

const ContactPage = () => {

  const [values, setValues] = useState({
    first_name: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values, // Spread the existing values
      [name]: value, // Update the specific field with the new value
    });
  };

  // Add a wait animation
  const [loader, setLoader] = useState(false);
  const handleLoader = () =>  {
    setLoader(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(baseUrl + "/hackathon/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Handle success here
      setLoader(false)
      alert("Message delivered");
        window.location.reload(true)
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [focusedInputs, setFocusedInputs] = useState({
    email: false,
    message: false,
  });

  const handleFocus = (inputName) => {
    setFocusedInputs({ ...focusedInputs, [inputName]: true });
  };

  return (
    <>
      {loader && <Process />}
      <div className="contact-us">
        <img src={starPink} alt="" className="star-even star39" />
        <img src={star} alt="" className="star-odd star40" />
        <img src={starPurple} alt="" className="star-even star41" />
        <img src={purplelens3} alt="" className="contact-lens" />
        <div className="contact-info">
          <h1 className="heading">Get in touch</h1>
          <p className="subheading info">
            Contact
            <br />
            Information
          </p>
          <p className="address info">
            27,Alara Street
            <br />
            Yaba 100012
            <br />
            Lagos State
          </p>
          <p className="call-us info">Call Us : 07067981819</p>
          <p className="open-hours info">
            we are open from Monday-Friday
            <br />
            08:00am - 05:00pm
          </p>
          <div className="social-area">
          <span className="follow">Share on</span>
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
        </div>
        <form action="submit" onSubmit={handleSubmit}>
          <h2 className="heading">
            Questions or need assistance?
            <br />
            Let us know about it!
          </h2>
          <input type="text" placeholder="First Name" name="first_name" value={values.first_name}
              onChange={onChange}/>
          <div
            className={`input-container ${
              focusedInputs.email ? "focused" : ""
            }`}>
            <input
              type="text"
              required
              name="email"
              value={values.email}
              onChange={onChange}
              id="contact-email"
              onBlur={() => handleFocus("email")}
              placeholder="Email"
            />
            <span className="error-message">Email address is required</span>
          </div>
          <div
            className={`input-container ${
              focusedInputs.message ? "focused" : ""
            }`}>
              <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
              value={values.message}
              onChange={onChange}
              onBlur={() => handleFocus("message")}></textarea>
            <span className="error-message">Message can not be empty</span>
          </div>
          <div className="btn">
            <button
              type="submit"
              className="button"
              onClick={handleLoader}
              disabled={
                values.email === "" ||
                values.first_name === "" ||
                values.message === ""
              }>
              Submit
            </button>
          </div>
        </form>
        <img src={purplelens2} alt="" className="contact-lens2" />
      </div>
    </>
  );
};

export default ContactPage;
